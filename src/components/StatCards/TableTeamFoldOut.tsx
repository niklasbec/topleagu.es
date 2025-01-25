import { StandingType } from '@/types/apiSchemas/getLeagues';
import React from 'react';
import Form from './Form';
import { useMediaQuery } from 'usehooks-ts';

interface TableTeamFoldOutProps {
  standing: StandingType;
}

const TableTeamFoldOut = ({ standing }: TableTeamFoldOutProps) => {
  const showOnlyPast3 = useMediaQuery('(max-width: 380px)');
  const form = showOnlyPast3 ? standing.form.slice(0, 3) : standing.form;

  return <Form form={form} />;
};

export default TableTeamFoldOut;
