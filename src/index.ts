import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();

const map = new Map('map');
map.addMarker({
  position: user.location,
  title: user.name,
});

map.addMarker({
  position: company.location,
  title: company.companyName,
});
