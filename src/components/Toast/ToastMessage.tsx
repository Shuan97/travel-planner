// import {
//   FaInfo,
//   FaCheck,
//   FaExclamationTriangle,
//   FaBug,
//   FaExclamationCircle,
// } from "react-icons/fa";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationIcon,
  HeartIcon,
  InformationCircleIcon,
} from "@heroicons/react/outline";
import PropTypes from "prop-types";
import React from "react";
import { toast } from "react-toastify";

interface ToastProps {
  type: "info" | "success" | "warning" | "error";
  message: string;
  title?: string;
}

const displayIcon = (type: string) => {
  switch (type) {
    case "success":
      return <CheckCircleIcon className='text-green-400' />;
    case "info":
      return <InformationCircleIcon className='text-sky-400' />;
    case "error":
      return <ExclamationCircleIcon className='text-red-400' />;
    case "warning":
      return <ExclamationIcon className='text-amber-400' />;
    default:
      return <HeartIcon className='text-gray-400' />;
  }
};

const options = (type: string) => {
  const className =
    "font-sans bg-gray-100 dark:bg-slate-800 dark:text-gainsboro dark:fill-gainsboro hover:fill-charcoal rounded-lg transition-all transform hover:translate-y-1";
  switch (type) {
    case "success":
      return {
        icon: <CheckCircleIcon className='text-green-500' />,
        className: className,
        progressClassName: "bg-green-500",
      };
    case "info":
      return {
        icon: <InformationCircleIcon className='text-sky-400' />,
        className: className,
        progressClassName: "bg-sky-400",
      };
    case "error":
      return {
        icon: <ExclamationCircleIcon className='text-red-500' />,
        className: className,
        progressClassName: "bg-red-500",
      };
    case "warning":
      return {
        icon: <ExclamationIcon className='text-amber-400' />,
        className: className,
        progressClassName: "bg-amber-400",
      };
    default:
      return {
        icon: <HeartIcon className='text-gray-400' />,
        className: className,
      };
  }
};

const ToastMessage = ({ type, message, title }: ToastProps) => {
  return toast[type](
    <div className='flex flex-col px-3 py-2'>
      {title && <div className='flex-grow'>{title}</div>}
      <div className={`flex-grow ${!!title && "text-sm text-gray-400"}`}>
        {message}
      </div>
    </div>,
    options(type)
  );
};

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
};

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;
