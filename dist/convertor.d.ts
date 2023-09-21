import { DMMF } from '@prisma/generator-helper';
import { ClassComponent } from './components/class.component';
import { DecoratorComponent } from './components/decorator.component';
import { FieldComponent } from './components/field.component';
type DefaultPrismaFieldType = 'BigInt' | 'Boolean' | 'Bytes' | 'DateTime' | 'Decimal' | 'Float' | 'Int' | 'Json' | 'String';
declare const primitiveMapType: Record<DefaultPrismaFieldType, string>;
export type PrimitiveMapTypeKeys = keyof typeof primitiveMapType;
export type PrimitiveMapTypeValues = typeof primitiveMapType[PrimitiveMapTypeKeys];
export interface SwaggerDecoratorParams {
    isArray?: boolean;
    type?: string;
    enum?: string;
    enumName?: string;
}
export interface ConvertModelInput {
    model: DMMF.Model;
    extractRelationFields?: boolean;
    postfix?: string;
    useGraphQL?: boolean;
}
export declare class PrismaConvertor {
    static instance: PrismaConvertor;
    private _config;
    private _dmmf;
    get dmmf(): DMMF.Document;
    set dmmf(value: DMMF.Document);
    get config(): Partial<Record<"makeIndexFile" | "dryRun" | "separateRelationFields" | "useSwagger" | "useGraphQL" | "useUndefinedDefault" | "clientImportPath" | "useNonNullableAssertions" | "preserveDefaultNullable", any>>;
    set config(value: Partial<Record<"makeIndexFile" | "dryRun" | "separateRelationFields" | "useSwagger" | "useGraphQL" | "useUndefinedDefault" | "clientImportPath" | "useNonNullableAssertions" | "preserveDefaultNullable", any>>);
    static getInstance(): PrismaConvertor;
    getPrimitiveMapTypeFromDMMF: (dmmfField: DMMF.Field) => PrimitiveMapTypeValues;
    extractTypeGraphQLDecoratorFromField: (dmmfField: DMMF.Field) => DecoratorComponent;
    extractSwaggerDecoratorFromField: (dmmfField: DMMF.Field) => DecoratorComponent;
    getClass: (input: ConvertModelInput) => ClassComponent;
    getClasses: () => ClassComponent[];
    convertField: (dmmfField: DMMF.Field) => FieldComponent;
}
export {};
