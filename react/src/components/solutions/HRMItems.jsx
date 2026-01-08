import PersonnelIcon from "@/assets/icons/solutions/personnel.svg?react";
import VacanciesIcon from "@/assets/icons/solutions/vacancies.svg?react";
import ScheduleIcon from "@/assets/icons/solutions/schedule.svg?react";
import LeaveIcon from "@/assets/icons/solutions/leave.svg?react";
import TimeIcon from "@/assets/icons/solutions/time.svg?react";

export default function HRMItems() {
  return (
    <>
      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <PersonnelIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Personnel management</p>
        <ul className="list-disc">
          <li>General user information</li>
          <li>Assigning roles</li>
          <li>Access to certain companies</li>
          <li>Skills</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <VacanciesIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Vacancies / Applicants</p>
        <ul className="list-disc">
          <li>Management of vacancies</li>
          <li>Applicant management</li>
          <li>Status of applicants within a job offer</li>
          <li>Also for internal applications</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <ScheduleIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Work schedules</p>
        <ul className="list-disc">
          <li>Schedule based on contract</li>
          <li>Schedule based on planning</li>
          <li>National holidays</li>
          <li>Calculation of vacation days</li>
          <li>Adjustable per day</li>
          <li>Easy to copy</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <LeaveIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Sickness absence / leave</p>
        <ul className="list-disc">
          <li>Sick leave procedures</li>
          <li>Leave requests with approval</li>
          <li>Feedback to employees via the intranet</li>
          <li>Immediately visible in the planning board for other employees</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <TimeIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Time registration</p>
        <ul className="list-disc">
          <li>Time clock logic with tags</li>
          <li>Registration option via intranet</li>
          <li>Enter the type of work yourself</li>
          <li>Compare with planned and contractual hours</li>
          <li>Contract management</li>
          <li>Durations</li>
          <li>Integration with committees</li>
          <li>Integration with time registration</li>
        </ul>
      </li>
    </>
  );
}
