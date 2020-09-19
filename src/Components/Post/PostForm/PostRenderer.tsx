import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getPostData } from "../../../common/requests";
import SinglePostComponent from "./SinglePostComponent";
import { SinglePost } from "../../../common/types";
import Loader from "../../Loader/Loader";

interface PostRendererProps {
  postId: number;
}
const PostRenderer = (props: PostRendererProps) => {
  const [postData, setPostData] = useState<SinglePost>();

  useEffect(() => {
    getPostData(props.postId, setPostData);
  }, []);

  const visibleComponent = postData ? (
    <SinglePostComponent data={postData} />
  ) : (
    <Loader />
  );
  return visibleComponent;
};

export default PostRenderer;
