/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';

interface IUserProfile {
    id: string;

    name: string;

    email: string;

    role: string;

    status: string;

    profile?: {
        id?: string;

        fullName?: string;

        profilePhoto?: string;

        bio?: string;

        phone?: string;

        address?: string;

        city?: string;

        country?: string;

        postalCode?: string;
    };
}

interface ProfileFormProps {
    profile: IUserProfile;
}

const ProfileForm = ({ profile }: ProfileFormProps) => {
    const initialProfileData = {
        fullName: profile.profile?.fullName || profile.name || '',

        email: profile.email || '',

        profilePhoto: profile.profile?.profilePhoto || '',

        bio: profile.profile?.bio || '',

        phone: profile.profile?.phone || '',

        address: profile.profile?.address || '',

        city: profile.profile?.city || '',

        country: profile.profile?.country || '',

        postalCode: profile.profile?.postalCode || '',
    };

    const [initialData, setInitialData] = useState(initialProfileData);

    const [formData, setFormData] = useState(initialProfileData);

    const [loading, setLoading] = useState(false);

    const isChanged = JSON.stringify(formData) !== JSON.stringify(initialData);

    if (!profile) {
        return <div>Profile not found</div>;
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData((prev) => ({
            ...prev,

            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isChanged) {
            toast.info('No changes found');
            return;
        }

        try {
            setLoading(true);

            const res = await fetch(
                `${process.env.BACKEND_API_URL}/api/auth/my-profile`,
                {
                    method: 'PUT',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        fullName: formData.fullName,
                        profilePhoto: formData.profilePhoto,
                        bio: formData.bio,
                        phone: formData.phone,
                        address: formData.address,
                        city: formData.city,
                        country: formData.country,
                        postalCode: formData.postalCode,
                    }),
                },
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.message || 'Profile update failed');
            }

            const updatedProfile = result.data.updatedProfile;

            const newData = {
                fullName: updatedProfile.profile?.fullName || '',

                email: updatedProfile.email || '',

                profilePhoto: updatedProfile.profile?.profilePhoto || '',

                bio: updatedProfile.profile?.bio || '',

                phone: updatedProfile.profile?.phone || '',

                address: updatedProfile.profile?.address || '',

                city: updatedProfile.profile?.city || '',

                country: updatedProfile.profile?.country || '',

                postalCode: updatedProfile.profile?.postalCode || '',
            };

            toast.success('Profile updated successfully');

            setFormData(newData);
            setInitialData(newData);
        } catch (error: any) {
            toast.error(error.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const imageUrl = formData.profilePhoto || '/default-avatar.png';

    return (
        <Card>
            <CardHeader>
                <CardTitle
                    className="
                    text-3xl
                    font-bold
                    text-primary
                    "
                >
                    My Profile
                </CardTitle>
            </CardHeader>

            <CardContent>
                <div
                    className="
                    grid
                    md:grid-cols-3
                    gap-8
                    "
                >
                    {/* Preview */}

                    <div
                        className="
                        flex
                        flex-col
                        items-center
                        gap-4
                        "
                    >
                        <Image
                            key={imageUrl}
                            src={imageUrl}
                            width={150}
                            height={150}
                            alt="Profile Photo"
                            priority
                            unoptimized
                            className="
                            rounded-full
                            border
                            object-cover
                            "
                        />

                        <h2
                            className="
                            text-xl
                            font-semibold
                            "
                        >
                            {formData.fullName}
                        </h2>

                        <p>{formData.email}</p>

                        <span
                            className="
                            bg-primary
                            text-primary-foreground
                            px-3
                            py-1
                            rounded-full
                            text-sm
                            "
                        >
                            {profile.role}
                        </span>
                    </div>

                    {/* Form */}

                    <div
                        className="
                        md:col-span-2
                        "
                    >
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label>Name</label>

                                <Input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Profile Photo URL</label>

                                <Input
                                    name="profilePhoto"
                                    value={formData.profilePhoto}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Phone</label>

                                <Input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Address</label>

                                <Input
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>City</label>

                                <Input
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Country</label>

                                <Input
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Bio</label>

                                <Textarea
                                    name="bio"
                                    rows={5}
                                    value={formData.bio}
                                    onChange={handleChange}
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={loading || !isChanged}
                                className="w-full"
                            >
                                {loading ? 'Updating...' : 'Update Profile'}
                            </Button>
                        </form>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfileForm;
