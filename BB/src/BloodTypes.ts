import {BloodtypeSharp} from "@mui/icons-material";

export type BloodTypes = 'A+'| 'A-'| 'B+'|'B-'|'O+'|'O-'|'AB+'|'AB-'

export const canDonateTo = (type:BloodTypes):BloodTypes[] =>{
    const convertion = {
        'A+' : ['A+','AB+'] as BloodTypes[],
        'A-' : ['A-','A+','AB+','AB-'] as BloodTypes[],
        'B+' : ['B+','AB+'] as BloodTypes[],
        'B-' : ['B-','B+','AB+','AB-'] as BloodTypes[],
        'O+' : ['O+','A+','B+','AB+'] as BloodTypes[],
        'O-' : ['O-','O+','A+','B+','AB+','A-','B-','AB-'] as BloodTypes[],
        'AB+' : ['AB+'] as BloodTypes[],
        'AB-' : ['AB+','AB-'] as BloodTypes[] ,
    }
    return convertion[type]
}

// export const canReceiveFrom = (type:BloodTypes):BloodTypes[] =>{
//     const convertion = {
//         'A+' : ['A+','AB+'],
//         'A-' : ['A-','A+','AB+','AB-'],
//         'B+' : ['B+','AB+'],
//         'B-' : ['B-','B+','AB+','AB-'],
//         'O+' : ['O+','A+','B+','AB+'],
//         'O-' : ['O-','O+','A+','B+','AB+','A-','B-','AB-'],
//         'AB+' : ['AB+'],
//         'AB-' : ['AB+','AB-'],
//     }
//     return convertion[type]
// }