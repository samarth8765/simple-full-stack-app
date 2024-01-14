import zod from 'zod';

export const createSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
});

export const updateSchema = zod.object({
    id: zod.string(),
});




