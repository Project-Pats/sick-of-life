import { Button } from "@/components/ui/button";
import React from "react";

const VpnComponent = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">your personal vpn</h2>
      <p className="text-sm text-gray-600 dark:text-gray-500 mb-4">
        you can say anything you want here, and i'll read it without knowing who
        you are o.o
      </p>
      <div className="flex">
        <Button variant="outline">
          <span className="text-xl">&gt;</span>
        </Button>
      </div>
    </div>
  );
};

export default VpnComponent;
