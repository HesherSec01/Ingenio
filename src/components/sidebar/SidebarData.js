import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [

  {
    title: 'Inicio',
    path: '/',
    icon: <FaIcons.FaHome  />,
  },
  {
    title: 'Perfil',
    path: '/perfil',
    icon: <FaIcons.FaUser  />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Reservas',
    path: '/usuario/reservas',
    icon: <FaIcons.FaCalendarAlt />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pendientes',
        path: '/pedidos/pendientes',
        icon: <FaIcons.FaHistory />,
        cName: 'sub-nav'
      },
      {
        title: 'Confirmados',
        path: '/pedidos/confirmadas',
        icon: <FaIcons.FaCheckCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Cancelados',
        path: '/pedidos/canceladas',
        icon: < FaIcons.FaTrashAlt/>,
        cName: 'sub-nav'
      }
    ]
  },

  {
    title: 'Pedidos',
    path: '/usuario/pedidos',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Pendientes',
        path: '/pedidos/pendientes',
        icon: <FaIcons.FaHistory />,
        cName: 'sub-nav'
      },
      {
        title: 'Confirmados',
        path: '/pedidos/confirmadas',
        icon: <FaIcons.FaCheckCircle />,
        cName: 'sub-nav'
      },
      {
        title: 'Cancelados',
        path: '/pedidos/canceladas',
        icon: < FaIcons.FaTrashAlt/>,
        cName: 'sub-nav'
      }
    ]
  },
  {
    title: 'Favoritos',
    path: '/favoritos',
    icon: <FaIcons.FaHeart />
  },

  {
    title: 'Notificaciones',
    path: '/messages',
    icon: <FaIcons.FaBell />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

  },
  {
    title: 'Ayuda',
    path: '/ayuda',
    icon: <FaIcons.FaQuestionCircle />
  },

  {
    title: 'Cerrar Sesión',
    path: '/cerrar-sesion',
    icon: <FaIcons.FaUserLock />
  },
];
