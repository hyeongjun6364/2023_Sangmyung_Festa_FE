import axios from 'axios';

export const fetchTicket = async () => {
    const url = 'https://1e67b6b0-8dc2-4d86-913a-d9ef3c1dc77a.mock.pstmn.io';
    try {
      const response = await axios.get(`${url}/event/ticket`);
      console.log(response.data);
      return response.data.ticket; // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      console.error(e);
      return null;
    }
}