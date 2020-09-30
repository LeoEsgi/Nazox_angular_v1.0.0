import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import { EventInput } from '@fullcalendar/core';

import { Event } from './event.model';
import { category, calendarEvents } from './data';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

/**
 * Calendar Component
 */
export class CalendarComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // event form
  formData: FormGroup;
  formEditData: FormGroup;

  // Form submition value
  submitted: boolean;

  // Form category data
  category: Event[];

  // Date added in event
  newEventDate: Date;

  // Edit event
  editEvent: EventInput;

  // Delete event
  deleteEvent: EventInput;

  calendarWeekends: any;
  // show events
  calendarEvents: EventInput[];

  // calendar plugin
  calendarPlugins = [dayGridPlugin, bootstrapPlugin, timeGrigPlugin, interactionPlugin, listPlugin];

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Nazox' }, { label: 'Calendar', active: true }];

    /**
     * Event Model validation
     */
    this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    /**
     * Edit Event Model Data
     */
    this.formEditData = this.formBuilder.group({
      editTitle: [],
      editCategory: [],
    });

    this._fetchData();
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  /**
   * Open Event Modal
   * @param content modal content
   * @param event calendar event
   */
  openModal(content: any, event: any) {
    this.newEventDate = event.date;
    this.modalService.open(content);
  }

  /**
   * Open Event Modal For Edit
   * @param editcontent modal content
   * @param event calendar event
   */
  openEditModal(editcontent: any, event: any) {
    this.formEditData = this.formBuilder.group({
      editTitle: event.event.title,
      editCategory: event.event.classNames[event.event.classNames.length - 1],
    });
    // tslint:disable-next-line: max-line-length
    this.editEvent = { id: event.event.id, title: event.event.title, start: event.event.start, classNames: event.event.classNames[event.event.classNames.length - 1] };
    this.modalService.open(editcontent);
  }

  /**
   * Show successfull Save Dialog
   */
  position() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Event has been saved',
      showConfirmButton: false,
      timer: 2000
    });
  }

  /**
   * Upldated event title save in calendar
   */
  editEventSave() {
    const editTitle = this.formEditData.get('editTitle').value;
    const editCategory = this.formEditData.get('editCategory').value;
    const editId = this.calendarEvents.findIndex(x => x.id + '' === this.editEvent.id + '');
    // tslint:disable-next-line: radix
    this.calendarEvents[editId] = { ...this.editEvent, title: editTitle, id: parseInt(this.editEvent.id + ''), className: editCategory };
    this.formEditData = this.formBuilder.group({
      editTitle: '',
      editCategory: '',
    });
    this.modalService.dismissAll();
  }

  /**
   * Delete the event from calendar
   */
  deleteEventData() {
    const deleteId = this.editEvent.id;
    const deleteEvent = this.calendarEvents.findIndex(x => x.id + '' === deleteId + '');
    this.calendarEvents[deleteEvent] = { ...this.deleteEvent, id: '' };
    delete this.calendarEvents[deleteEvent].id;
    this.modalService.dismissAll();
  }

  /**
   * Model Data save and show the event in calendar
   */
  saveEvent() {
    if (this.formData.valid) {
      const title = this.formData.get('title').value;
      // tslint:disable-next-line: no-shadowed-variable
      const category = this.formData.get('category').value;

      this.calendarEvents = this.calendarEvents.concat({
        id: this.calendarEvents.length + 1,
        title,
        className: category,
        start: this.newEventDate || new Date()
      });
      this.position();
      this.formData = this.formBuilder.group({
        title: '',
        category: ''
      });
      this.modalService.dismissAll();
    }
    this.submitted = true;
  }

  /**
   * Open Delete Confirmation Modal
   */
  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        this.deleteEventData();
        Swal.fire('Deleted!', 'Event has been deleted.', 'success');
      }
    });
  }

  private _fetchData() {
    // Event category
    this.category = category;
    // Calender Event Data
    this.calendarEvents = calendarEvents;

    // form submit
    this.submitted = false;
  }

  closeEventModal() {
    const title = this.formData.get('title').value;
    // tslint:disable-next-line: no-shadowed-variable
    const category = this.formData.get('category').value;
    this.formData = this.formBuilder.group({
      title: '',
      category: ''
    });
    this.modalService.dismissAll();
  }
}
