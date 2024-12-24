import { FormData } from '../components/ContactSection';

export async function sendEmail(data: FormData): Promise<boolean> {
  const apiEndpoint = '/api/email';
  try {
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
    return res.status === 200;
  } catch (error) {
    return false;
  }
}
