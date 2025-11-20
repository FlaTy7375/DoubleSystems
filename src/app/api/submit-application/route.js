import { getPayload } from 'payload';
import payloadConfig from '@payload-config';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    const payload = await getPayload({ config: payloadConfig });

    const { name, email, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { message: 'Необходимо указать имя и контактные данные.' },
        { status: 400 }
      );
    }
    
    const newApplication = await payload.create({
      collection: 'applications',
      data: {
        name: name,
        email: email, 
        message: message,
        status: 'Новая',
      },
      overrideAccess: true,
    });

    return NextResponse.json(
      { message: 'Заявка успешно создана!', application: newApplication },
      { status: 200 }
    );

  } catch (error) {
    console.error('Ошибка при обработке заявки:', error);
    return NextResponse.json(
      { message: 'Внутренняя ошибка сервера.' },
      { status: 500 }
    );
  }
}