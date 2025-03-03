"use client";
import { useParams } from "next/navigation";
import React from "react";

const PostId = () => {
  return <div>{useParams().postId}</div>;
};

export default PostId;
