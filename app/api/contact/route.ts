import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'contact-submissions.json');

function readSubmissions() {
  try {
    if (!fs.existsSync(SUBMISSIONS_FILE)) return [];
    const raw = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function writeSubmissions(submissions: unknown[]) {
  const dir = path.dirname(SUBMISSIONS_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const submission = {
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      name: body.name,
      email: body.email,
      company: body.company || null,
      phone: body.phone || null,
      service: body.service,
      budget: body.budget,
      description: body.description,
    };

    const submissions = readSubmissions();
    submissions.unshift(submission); // newest first
    writeSubmissions(submissions);

    return NextResponse.json({ success: true, id: submission.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ success: false, error: 'Failed to save submission' }, { status: 500 });
  }
}

export async function GET() {
  const submissions = readSubmissions();
  return NextResponse.json({ submissions, count: submissions.length });
}
