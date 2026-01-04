import ErrorIcon from "@/assets/img/icons/error.svg?react";

export default function Error() {
  return (
    <div className="container mx-auto flex items-center gap-2 justify-center space-x-2 px-4 py-9">
      <ErrorIcon className="text-red-500" />
      Error occured, please refresh the page.
    </div>
  );
}
