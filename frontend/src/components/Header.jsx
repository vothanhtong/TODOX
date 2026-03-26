import React from "react";

export const Header = () => {
  return (
    <div className="space-y-2 text-center">
      <h1 className="text-4xl font-bold text-transparent bg-blue-500 bg-clip-text">
        TodoX
      </h1>

      <p className="text-muted-foreground">
        Không có việc gì khó, chỉ sợ mình không làm - Hãy bắt đầu với TodoX ngay hôm nay!
      </p>
    </div>
  );
};
