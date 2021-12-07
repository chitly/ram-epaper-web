import { AiOutlineInbox } from 'react-icons/ai';

const List = {
  Inbox: 'AiOutlineInbox',
};

const getIconComponent = (name) => {
  switch (name) {
    case List.Inbox:
      return AiOutlineInbox;
    default:
      return null;
  }
};

const Icon = ({ name, ...props }) => {
  const IconComponent = getIconComponent(name);
  if (!IconComponent) return null;
  return <IconComponent {...props} />;
};

Icon.List = List;

export default Icon;
