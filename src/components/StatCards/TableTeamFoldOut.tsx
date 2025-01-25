import { StandingType } from '@/types/apiSchemas/getLeagues';
import React from 'react';
import Form from './Form';

interface TableTeamFoldOutProps {
  standing: StandingType;
}

const TableTeamFoldOut = ({ standing }: TableTeamFoldOutProps) => {
  console.log(standing);
  return <Form form={standing.form} />;
};

export default TableTeamFoldOut;
