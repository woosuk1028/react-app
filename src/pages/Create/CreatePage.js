import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { getCurrentLocation } from 'services/api/geo';
import {
    FormContainer,
    FormField,
    Label,
    Input,
    Textarea,
    SubmitButton
} from './styled';
import { fetchCreateData } from 'services/api/create';

const CreatePage = () => {
    const [location, setLocation] = useState({ lat: null, lng: null });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const onSubmit = async (values) => {
        try {
            const result = await fetchCreateData(values.title, values.contents, values.lat, values.lng);
            console.log(result);
        } catch (error) {
            console.error('Error creating data:', error);
        }
    }

    useEffect(() => {
        getCurrentLocation()
            .then((location) => {
                setLocation(location);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;  // 로딩 스피너 또는 로딩 메시지 표시
    }

    return (
        <FormContainer>
            <Form
                onSubmit={onSubmit}
                initialValues={{ lat: location.lat, lng: location.lng }}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormField>
                            <Label htmlFor="title">제목</Label>
                            <Field
                                name="title"
                                render={({ input }) => (
                                    <Input {...input} placeholder="Title" />
                                )}
                            />
                        </FormField>

                        <FormField>
                            <Label htmlFor="contents">내용</Label>
                            <Field
                                name="contents"
                                render={({ input }) => (
                                    <Textarea {...input} placeholder="Contents" />
                                )}
                            />
                        </FormField>

                        <FormField>
                            <Label htmlFor="lat">위도</Label>
                            <Field
                                name="lat"
                                render={({ input }) => (
                                    <Input {...input} placeholder="위도" />
                                )}
                            />
                        </FormField>

                        <FormField>
                            <Label htmlFor="lng">경도</Label>
                            <Field
                                name="lng"
                                render={({ input }) => (
                                    <Input {...input} placeholder="경도" />
                                )}
                            />
                        </FormField>

                        <SubmitButton type="submit">Submit</SubmitButton>
                    </form>
                )}
            />
        </FormContainer>
    );
};

export default CreatePage;