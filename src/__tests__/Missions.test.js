import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'jest-fetch-mock';
import { fetchMissions } from '../redux/missions/missionsSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Missions async actions', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch missions', async () => {
    const mockMissions = [
      {
        mission_id: '1',
        mission_name: 'Mission 1',
        description: 'Description of Mission 1',
      },
      {
        mission_id: '2',
        mission_name: 'Mission 2',
        description: 'Description of Mission 2',
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockMissions));

    const store = mockStore({ missions: [], loading: false, error: null });

    await store.dispatch(fetchMissions());

    const actions = store.getActions();

    expect(actions[0].type).toEqual(fetchMissions.pending.type);
    expect(actions[1].type).toEqual(fetchMissions.fulfilled.type);
  });

});
