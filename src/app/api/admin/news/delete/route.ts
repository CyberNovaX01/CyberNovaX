import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { adminClient } from '@/lib/supabase';

function isAuthenticated(token: string | undefined): boolean {
  if (!token) return false;
  // Token ត្រូវតែជា hex 64 តួអក្សរ (HMAC-SHA256)
  return /^[a-f0-9]{64}$/i.test(token);
}

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_session')?.value;

    if (!isAuthenticated(token)) {
      return NextResponse.json(
        { error: 'Unauthorized — សូម Login ម្ដងទៀត' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { id } = body;

    if (!id || typeof id !== 'string') {
      return NextResponse.json(
        { error: 'Missing or invalid id' },
        { status: 400 }
      );
    }

    const supabase = adminClient();
    const { error } = await supabase
      .from('news')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || 'Server error' },
      { status: 500 }
    );
  }
}