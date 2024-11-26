import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="mb-4 text-center">
        <h1 className="text-4xl font-bold">
          <span className="text-red-500">En</span>Convo
        </h1>
        <p className="italic">Secure by design, not by option</p>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
