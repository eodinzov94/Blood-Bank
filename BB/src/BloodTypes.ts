import {BloodtypeSharp} from "@mui/icons-material";

export type BloodTypes = 'A+'| 'A-'| 'B+'|'B-'|'O+'|'O-'|'AB+'|'AB-'

export const canDonateTo = (type:BloodTypes):BloodTypes[] =>{
    const conversion = {
        'A+' : ['A+','AB+'] as BloodTypes[],
        'A-' : ['A-','A+','AB+','AB-'] as BloodTypes[],
        'B+' : ['B+','AB+'] as BloodTypes[],
        'B-' : ['B-','B+','AB+','AB-'] as BloodTypes[],
        'O+' : ['O+','A+','B+','AB+'] as BloodTypes[],
        'O-' : ['O-','O+','A+','B+','AB+','A-','B-','AB-'] as BloodTypes[],
        'AB+' : ['AB+'] as BloodTypes[],
        'AB-' : ['AB+','AB-'] as BloodTypes[] ,
    }
    return conversion[type]
}

export const canReceiveFrom = (type:BloodTypes):BloodTypes[] =>{
    const conversion = {
        'A+' : ['A+','A-','O-','O+'] as BloodTypes[],
        'A-' : ['A-','O-'] as BloodTypes[],
        'B+' : ['B+','B-','O-','O+'] as BloodTypes[],
        'B-' : ['B-','O-'] as BloodTypes[],
        'O+' : ['O-','O+'] as BloodTypes[],
        'O-' : ['O-']as BloodTypes[],
        'AB+' : ['O-','O+','A+','B+','AB+','A-','B-','AB-'] as BloodTypes[],
        'AB-' : ['A-','AB-','B-','O-']as BloodTypes[] ,
    }
    return conversion[type]
}