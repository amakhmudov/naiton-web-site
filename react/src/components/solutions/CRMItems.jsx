import EmailIcon from "@/assets/icons/solutions/email.svg?react";
import ImacIcon from "@/assets/icons/solutions/imac.svg?react";
import TasksIcon from "@/assets/icons/solutions/tasks.svg?react";
import ContactIcon from "@/assets/icons/solutions/contact.svg?react";
import SlaIcon from "@/assets/icons/solutions/sla.svg?react";

export default function CRMItems() {
  return (
    <>
      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <EmailIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Email module</p>
        <ul className="list-disc">
          <li>General mail and Personal mail</li>
          <li>Link emails to customers and/or files</li>
          <li>Easy access sharing</li>
          <li>Convert email to task, assignment or ticket</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <ImacIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">IMAC; Install - Move - Add - Change</p>
        <ul className="list-disc">
          <li>Each relationship / customer has their own card</li>
          <li>Establish connections between relations / customers / assignments</li>
          <li>Example: Ticket (at Lidl) hanging under a customer (DN)</li>
          <li>Multiple email addresses per relationship</li>
          <li>History per relationship; who, what, where, notifications, assignments, tickets, solutions, etc.</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <TasksIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Tasks, assignments and tickets</p>
        <ul className="list-disc">
          <li>Internal assignment of tasks/assignments to resources (people, vehicles and equipment), with time slotting and optimal suggestions</li>
          <li>Feedback to customers / Possibility of escalation</li>
          <li>Log customer issues</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <ContactIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Contact moments (Dossier formation)</p>
        <ul className="list-disc">
          <li>Recording conversations - VOIP - Call actions</li>
          <li>Link to orders, invoices, tasks and payments</li>
          <li>Campaigns with phases and question paths, Acquisition and Periodic contact</li>
          <li>Conversion statistics</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <SlaIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">SLA's</p>
        <ul className="list-disc">
          <li>Variable SLAs per customer, different urgency levels</li>
          <li>Deadlines are determined based on SLA and urgency level</li>
          <li>Deadlines provide certain urgency/priority</li>
          <li>SLA's partially determine pricing</li>
        </ul>
      </li>
    </>
  );
}
