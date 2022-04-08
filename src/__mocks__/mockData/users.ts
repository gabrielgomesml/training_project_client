export interface User {
  id: string;
  email: string;
  name: string;
  surname: string;
  photo_address: string | null;
  phone: string | null;
  role: number;
  active: boolean;
  createdAt: string;
}

export const users: User[] = [
  {
    id: 'afc6aeaa-8ea8-49e3-85d6-2cb5a84873f6',
    email: 'giselarebecca@gmail.com',
    name: 'Gisela',
    surname: 'Rebecca',
    photo_address: null,
    phone: null,
    role: 0,
    active: true,
    createdAt: '2022-02-22T19:45:23.963Z',
  },
  {
    id: 'ba6a1b0a-d20d-497d-906d-2de2d0a50a9a',
    email: 'gabrielmelo@gmail.com',
    name: 'Gabriel',
    surname: 'Melo',
    photo_address: null,
    phone: '(81) 98845-0700',
    role: 0,
    active: true,
    createdAt: '2022-02-18T17:19:04.609Z',
  },
  {
    id: 'c1424540-f4b8-4eb4-a3a7-b39b85f0121e',
    email: 'gabrielgomes@gmail.com',
    name: 'Gabriel',
    surname: 'Gomes',
    photo_address:
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Alex_Turner%2C_Way_Out_West_2018.jpg',
    phone: '(81) 98562-7583',
    role: 0,
    active: true,
    createdAt: '2022-02-17T19:34:53.769Z',
  },
  {
    id: '413d2b59-90fa-4888-b654-2cd4523bb413',
    email: 'emailteste@gmail.com',
    name: 'Usuário',
    surname: 'Teste',
    photo_address: null,
    phone: '(81) 9999-9999',
    role: 0,
    active: true,
    createdAt: '2022-03-11T19:34:55.428Z',
  },
  {
    id: 'c2c59387-e2bd-418f-a135-eee169d4ae54',
    email: 'xgabrielgomesmelo@gmail.com',
    name: 'Gabriel',
    surname: 'Melo',
    photo_address:
      'https://upload.wikimedia.org/wikipedia/commons/9/95/Alex_Turner%2C_Way_Out_West_2018.jpg',
    phone: '(81) 98562-7583',
    role: 1,
    active: true,
    createdAt: '2022-01-17T18:47:26.500Z',
  },
];
