import UpdatesIcon from "@/assets/icons/solutions/updates.svg?react";
import LicenseIcon from "@/assets/icons/solutions/license.svg?react";
import HostingIcon from "@/assets/icons/solutions/hosting.svg?react";

export default function LicencesItems() {
  return (
    <>
      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <UpdatesIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">All customers will receive new updates</p>
        <ul className="list-disc">
          <li>Users can update in 1 to 2 minutes</li>
          <li>Updates can also be done centrally via an admin</li>
          <li>No frozen outdated versions</li>
          <li>Posting updates in consultation</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <LicenseIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">License model and SLA (Service Level Agreement)</p>
        <ul className="list-disc">
          <li>All necessary modules and licenses, for all users</li>
          <li>So no license per user and no license per module</li>
          <li>Including the App</li>
          <li>No extra costs for using the App, no strip list principle</li>
          <li>Unlimited use of the software within the group of companies with which we have entered into the agreement</li>
        </ul>
      </li>

      <li className="flex flex-col space-y-3 p-6 lg-down:px-0">
        <HostingIcon className="text-accent md-down:mx-auto" />
        <p className="text-lead">Hosting</p>
        <ul className="list-disc">
          <li>Incl. power and data consumption and firewalls</li>
          <li>Backup and roll-back facilities</li>
          <li>Hot swappable drives</li>
        </ul>
      </li>
    </>
  );
}
