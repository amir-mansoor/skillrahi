"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, CheckCircle, XCircle, Info } from "lucide-react";

const AlertComponent = ({ title, message, status = "info" }) => {
  let icon = <Info className="h-5 w-5 text-blue-500" />;
  let variant = "default";
  let color = "text-blue-700";

  if (status === "success") {
    icon = <CheckCircle className="h-5 w-5 text-green-500" />;
    color = "text-green-700";
  } else if (status === "error") {
    icon = <XCircle className="h-5 w-5 text-red-500" />;
    variant = "destructive";
    color = "text-red-700";
  }

  return (
    <div className="mt-4">
      <Alert variant={variant} className="flex items-start gap-3">
        {icon}
        <div>
          <AlertTitle className={`font-semibold ${color}`}>
            {title ||
              (status === "success"
                ? "Success!"
                : status === "error"
                ? "Error"
                : "Notice")}
          </AlertTitle>
          <AlertDescription className="text-gray-700">
            {message}
          </AlertDescription>
        </div>
      </Alert>
    </div>
  );
};

export default AlertComponent;
