import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function CustomAlert(props) {
  return (
    <>
      {props.alert ? (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-lg">
          <Alert
            variant="default"
            className="flex items-start gap-3 p-4 rounded-xl shadow-lg bg-white"
          >
            <Terminal className="h-5 w-5 mt-1 text-slate-600" />
            <div className="flex flex-col">
              <AlertTitle className="font-semibold text-lg text-slate-900">
                Successfully submitted
              </AlertTitle>
              <AlertDescription className="text-slate-600 mt-1 leading-relaxed">
                Your form has been submitted we will contact you on your
                whatsapp or email soon
              </AlertDescription>
            </div>
          </Alert>
        </div>
      ) : null}
    </>
  );
}
