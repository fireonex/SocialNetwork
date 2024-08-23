import React from "react";
import { Skeleton } from "antd";

export const CustomSkeleton = () => {
    return <Skeleton
        active
        title={{ width: '100%' }}
        paragraph={{
            rows: 20,
            width: 100
        }}
        style={{ height: '100vh' }}
    />
};
