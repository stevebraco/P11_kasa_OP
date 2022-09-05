import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Loading from '../components/Loading/Loading';
import AppartementDetails from '../components/Appartement/AppartementDetails';
import Appartement from '../types/Appartement';

type AppartementPageProp = {
  appartements: Appartement[] | undefined,
  loading: boolean
}

function AppartementPage({ appartements, loading }: AppartementPageProp) {
  const { id } = useParams();
  const findId = appartements?.find((appartement) => appartement.id === id);

  if (loading) return <Loading />;
  if (findId === undefined) return <ErrorPage />;
  return <AppartementDetails {...findId} />;
}

export default AppartementPage;
