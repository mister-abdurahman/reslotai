import { CircleX } from "lucide-react";

// components/Modal.js
export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50 h-screen">
      <div className="bg-white p-4 rounded-md shadow-md max-w-md w-full mx-3 relative">
        <CircleX
          className="absolute w-8 h-8 top-6 right-6 fill-purple-600 text-white cursor-pointer"
          onClick={onClose}
        />
        <div>{children}</div>
      </div>
    </div>
  );
}
