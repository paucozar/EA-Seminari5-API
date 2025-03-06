// src/services/user_service.ts
import Subject, { ISubject } from '../subject/subject_models.js';
import {IUser} from '../users/user_models.js';
import {Types} from 'mongoose';

export const saveMethod = () => {
    return 'Hola';
};
export const createSubject = async (subjectData: ISubject) => {
    const subject = new Subject(subjectData);
    return await subject.save();
};

export const getAllSubjects = async () => {
    return await Subject.find().populate('students');
};

export const getSubjectById = async (id: string) => {
    return await Subject.findById(id).populate('students');
};

export const updateSubject = async (id: string, updateData: Partial<ISubject>) => {
    return await Subject.updateOne({ _id: id }, { $set: updateData });
};

export const deleteSubject = async (id: string) => {
    return await Subject.deleteOne({ _id: id });
};

export const getStudentsBySubjectId = async (id: string) => {
    const subject = await Subject.findById(id).populate('students');
    return subject ? subject.students : [];
};
