import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Call backend API
        const response = await fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const data = await response.json();

        if (data.success) {
            return NextResponse.json({
                success: true,
                message: data.message,
                user: data.user,
            });
        } else {
            return NextResponse.json(data, { status: response.status });
        }

    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Connection error' },
            { status: 500 }
        );
    }
}
