import React from 'react';
import { useParams } from 'react-router-dom';
import ErrorScreen from './ErrorScreen';
import Loading from '../components/Loading/Loading';
import AppartementDetails from '../components/Appartement/AppartementDetails';
import { Appartement } from '../hooks/useFetch';

type AppartementScreenProp = {
  appartements: Appartement[] | undefined,
  loading: boolean
}

function AppartementScreen({ appartements, loading }: AppartementScreenProp) {
  const { id } = useParams();
  const findId = appartements?.find((appartement) => appartement.id === id);

  if (loading) return <Loading />;
  if (findId === undefined) return <ErrorScreen />;
  return <AppartementDetails {...findId} />;
}

export default AppartementScreen;
