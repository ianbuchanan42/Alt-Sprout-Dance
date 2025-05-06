import { useAppSelector } from '../store/hooks';
import { selectDashboard } from '../store/slices/dashboardSlice';

interface DashboardSettings {
  simpleResponseOn: boolean;
  complexResponseOn: boolean;
  simpleCharMax: number;
  complexCharMax: number;
  targetAudienceOptions: string[];
  defaultAudience: number;
}

const Dashboard = () => {
  const dashboardSettings = useAppSelector(selectDashboard);
  console.log(dashboardSettings);
  const keys = Array.from(Object.keys(dashboardSettings)) as Array<
    keyof DashboardSettings
  >;
  return (
    <>
      <h2> Dashboard</h2>
      <h3>Settings</h3>
      <ul>
        {keys.map((prop) => {
          return <li>{prop}</li>;
        })}
      </ul>
      <ul>
        <li>- Add/Edit Target Audience</li>
        <li>- Edit or Copy from saved responses with thumbnail of image</li>
        <li>- Delete Account</li>
        <li>
          - Set default settings, image file vs url, char length of responses,
          use just simple or complex response (improve response time){' '}
        </li>
        <li>- send feedback form</li>
      </ul>
    </>
  );
};

export default Dashboard;
