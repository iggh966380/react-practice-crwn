import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.style.jsx";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  console.log(route);
  const navigate = useNavigate();

  const onNavigateHandler = () => {
    navigate(route);
    console.log("hello");
  };
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
