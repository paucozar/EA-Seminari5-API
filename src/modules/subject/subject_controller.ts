// src/controllers/_controller.ts
import { saveMethod, createSubject, getAllSubjects, getSubjectById, updateSubject, deleteSubject, getStudentsBySubjectId } from '../subject/subject_service.js';

import express, { Request, Response } from 'express';

export const saveMethodHandler = async (req: Request, res: Response) => {
    try {
        const subject = saveMethod();
        res.json(subject);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const createSubjectHandler = async (req: Request, res: Response) => {
    try {
        const subject = await createSubject(req.body);
        res.json(subject);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getAllSubjectsHandler = async (req: Request, res: Response) => {
    try {
        const subjects = await getAllSubjects();
        res.json(subjects);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getSubjectByIdHandler = async (req: Request, res: Response) => {
    try {
        const subject = await getSubjectById(req.params.id);
        res.json(subject);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const updateSubjectHandler = async (req: Request, res: Response) => {
    try {
        const subject = await updateSubject(req.params.id, req.body);
        res.json(subject);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const deleteSubjectHandler = async (req: Request, res: Response) => {
    try {
        const subject = await deleteSubject(req.params.id);
        res.json(subject);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
export const getStudentsBySubjectIdHandler = async (req: Request, res: Response) => {
    try {
        const students = await getStudentsBySubjectId(req.params.id);
        res.json(students);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
