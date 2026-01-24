import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Create new admission record
        // We map fields carefully to avoid errors if extra fields are sent
        const admission = await prisma.admission.create({
            data: {
                studentName: body.studentName,
                fatherName: body.fatherName,
                motherName: body.motherName,
                address: body.address,
                city: body.city,
                pinCode: body.pinCode,
                district: body.district,
                state: body.state,
                country: body.country,
                landmark: body.landmark,
                contactNumber: body.contactNumber,
                aadhaarNumber: body.aadhaarNumber,
                nationality: body.nationality,
                bloodGroup: body.bloodGroup,

                studentPhotoUrl: body.studentPhotoUrl, // expecting Base64 string or URL
                signatureUrl: body.signatureUrl,       // expecting Base64 string or URL

                previousSchool: body.previousSchool,
                achievements: body.achievements,
                religion: body.religion,
                caste: body.caste,

                fatherAadhaar: body.fatherAadhaar,
                motherAadhaar: body.motherAadhaar,

                hobby: body.hobby,
                dob: body.dob,
            },
        });

        return NextResponse.json({ success: true, data: admission }, { status: 201 });
    } catch (error) {
        console.error("Error creating admission:", error);
        return NextResponse.json({ success: false, error: 'Failed to submit application' }, { status: 500 });
    }
}
