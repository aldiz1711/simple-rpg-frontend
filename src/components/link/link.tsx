import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Link({
  route,
  name,
  icon,
}: {
  route: string;
  name: string;
  icon: any;
}) {
  return (
    <div className="Link">
      <FontAwesomeIcon icon={icon} />
      <a className="ml-2" href={route}>
        {name}
      </a>
    </div>
  );
}
