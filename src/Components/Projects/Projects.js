import React, {Component} from 'react';
import './Projects.css';
import Project from '../Project/Project';
import Modal from '../Modal/Modal';
import ModalProjects from '../Modal/ModalProjects'
import moment from 'moment';
import 'moment/locale/ru';
import {numberShowWeekSelector, projectSelector} from "../../Selectors/selectors";
import {createSelector} from "reselect";
import {connect} from "react-redux";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      userSelectValue: '',
      inputNumValue: 10,
      weeksValue: '',
      isOpen: false
    };
  }

  getWeeks = () => {
    let date = new Date();

    let week = moment(date).isoWeek();

    return Array(50).fill(week).map(i => {
      var start = moment(new Date().getFullYear().toString() + '-12-31').locale('ru').add(week, 'weeks').startOf('isoweek').format('DD MMMM YY');
      var end = moment(new Date().getFullYear().toString() + '-12-31').add(week, 'weeks').endOf('isoweek').format('DD MMMM YY');
      week++;
      return {
        title: start + ' - ' + end,
        value: parseInt(week, 10)
      };
    })
  }

  onClose = () => {
    var arr = [];
    arr.push(this.state.weeksValue);

    if (this.state.inputValue) {

      this.props.onAddProject({
        id: new Date().getTime(),
        title: this.state.inputValue,
        content: "Lorem ipsum",
        color: "rgba(0,100,222,1)",
        users: this.state.userSelectValue,
        workload: [
          {
            weeks: arr,
            user: this.state.userSelectValue,
            percent: this.state.inputNumValue
          }
        ],
        history: []
      })
      this.setState({
        flag: !this.state.flag
      })
    }
    console.log(this.state.inputNumValue)
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState({
      inputValue: '',
      isOpen: !this.state.isOpen
    });
  }

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }
  updateInputNumValue = e => {
    this.setState({
      inputNumValue: e.target.value
    });
  }

  handleWeeksSelect = e => {
    this.setState({
      weeksValue: e.target.value
    });
  }

  userChange = e => {
    this.setState({
      userSelectValue: e.target.value
    });
  }


  render() {
    this.getWeeks()
    return (
      <section className="main">
        <div className="main__content">
          {
            this.props.projects.map(item => {
              return <Project key={item.id} project={item}/>
            })
          }
        </div>
        <div className="add">
          <button className="add__btn" onClick={this.toggleModal}>
            Новый проект
          </button>
          <Modal show={this.state.isOpen} onClose={this.onClose} toggleModal={this.toggleModal}>
            <ModalProjects updateInputValue={this.updateInputValue}
                           arrWeeks={this.getWeeks()}
                           inputValue={this.state.inputValue}
                           userChange={this.userChange}
                           userSelectValue={this.state.userSelectValue}
                           updateInputNumValue={this.updateInputNumValue}
                           inputNumValue={this.state.inputNumValue}
                           handleWeeksSelect={this.handleWeeksSelect}
                           weeksValue={this.state.weeksValue}/>
          </Modal>
        </div>
      </section>
    );
  }
}

const selector = createSelector(
  projectSelector,
  (projects) => ({
    projects
  })
);
export default connect(selector)(Projects);
