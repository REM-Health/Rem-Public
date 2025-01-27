export interface CommissionDatum {
  CARRIER: string;
  MBI: string;
  MEMBER_ID: string;
  "Member Name": string;
  "Agent Name": string;
  "Agent NPN": string;
  "Plan Name": string;
  "Plan ID": string;
  "Effective Date": string;
  "Disenrollment Date": string;
  "Enrollment Type": string;
  "Commission Period": string;
  "Commission Paid Date": string;
  "Commission Amount Total": string;
  "Commission Compensation Type": string;
  "Commission Agent Amount": string;
  "Commission Agency 1": string;
  "Commission Agency 1 Amount": string;
  "Commission Agency 2": string;
  "Commission Agency 2 Amount": string;
  [key: string]: string | undefined;
}
