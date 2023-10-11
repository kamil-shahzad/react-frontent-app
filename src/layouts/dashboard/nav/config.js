// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Registered Companies',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Add Comapnies',
    path: '/dashboard/addcompany',
    icon: icon('ic_user')
  },
  {
    title: 'Customers',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  
];

export default navConfig;
