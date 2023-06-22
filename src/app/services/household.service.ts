import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  constructor(private http: HttpClient) {}

  private baseUrl: string = 'http://localhost:8080/nfhs6';

  getTestData(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getTestData');
}
getAllMenVisit1554Visits(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getAllMenVisit1554Visits');
}


getAllEligibleMenResponseRate(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllEligibleMenResponseRate'
    );
}

getAllEligibleMenResponseRateTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllEligibleMenResponseRateTeamwise/' + stateId
    );
}

getAllEligibleMenResponseRateMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllEligibleMenResponseRateMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllAgeDisplacementWomenLowerLimit(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllAgeDisplacementWomenLowerLimit'
    );
}
getAllAgeDisplacementWomenLowerLimitTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllAgeDisplacementWomenLowerLimitTeamwise/' +
        stateId
    );
}
getAllAgeDisplacementWomenLowerLimitMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllAgeDisplacementWomenLowerLimitMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}
getAllAgeDisplacementWomenUpperLimit(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllAgeDisplacementWomenUpperLimit'
    );
}
getAllAgeDisplacementWomenUpperLimitTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllAgeDisplacementWomenUpperLimitTeamwise/' +
        stateId
    );
}
getAllAgeDisplacementWomenUpperLimitMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllAgeDisplacementWomenUpperLimitMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}
getAllAgeDisplacementMenLowerLimit(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllAgeDisplacementMenLowerLimit'
    );
}

getAllAgeDisplacementMenLowerLimitTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllAgeDisplacementMenLowerLimitTeamwise/' +
        stateId
    );
}

getAllAgeDisplacementMenLowerLimitMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllAgeDisplacementMenLowerLimitMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}
getAllAgeDisplacementMenUpperLimit(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllAgeDisplacementMenUpperLimit'
    );
}
getAllAgeDisplacementMenUpperLimitTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllAgeDisplacementMenUpperLimitTeamwise/' +
        stateId
    );
}
getAllAgeDisplacementMenUpperLimitMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllAgeDisplacementMenUpperLimitMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllMenVisit1549Visits(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getAllMenVisit1554Visits');
}

getAllMenVisit1549VisitsTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllMenVisit1554VisitsTeamwise/' + stateId
    );
}

getAllMenVisit1549VisitsMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllMenVisit1554VisitsMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllVisitHh(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getAllVisitHh');
}
getAllVisitHhTeamwise(stateId: string | null): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllVisitHhTeamwise/' + stateId
    );
}

getAllVisitHhMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllVisitHhMemberwise/' + stateId + '/' + teamNo
    );
}
getAllEligibleWomenPerHh(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getAllEligibleWomenPerHh');
}

getAllEligibleWomenPerHhTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllEligibleWomenPerHhTeamwise/' + stateId
    );
}
getAllEligibleWomenPerHhMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllEligibleWomenPerHhMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllEligibleMenPerHh(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getAllEligibleMenPerHh');
}
getAllEligibleMenPerHhMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllEligibleMenPerHhMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}
getAllEligibleMenPerHhTeamwise(stateId: string | null): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllEligibleMenPerHhTeamwise/' + stateId
    );
}

getAllBirthDisplacement(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getAllBirthDisplacement');
}
getAllBirthDisplacementTeamwise(stateId: string | null): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllBirthDisplacementTeamwise/' + stateId
    );
}

getAllBirthDisplacementMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllBirthDisplacementMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}
getAllWomenVisit1549Visits(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getAllWomenVisit1549Visits');
}

getAllWomenVisit1549VisitsTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllWomenVisit1549VisitsTeamwise/' + stateId
    );
}

getAllWomenVisit1549VisitsMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllWomenVisit1549VisitsMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllEligibleWomenResponseRate(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllEligibleWomenResponseRate'
    );
}
// /getAllEligibleWomenResponseRateTeamwise/{stateId}

getAllEligibleWomenResponseRateTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllEligibleWomenResponseRateTeamwise/' + stateId
    );
}

getAllEligibleWomenResponseRateMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllEligibleWomenResponseRateMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllHhCompletionRate(): Observable<any[]> {
    return this.http.get<any>(this.baseUrl + '/getAllHhCompletionRate');
}
getAllHhCompletionRateTeamwise(stateId: string | null): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllHhCompletionRateTeamwise/' + stateId
    );
}
getAllHhCompletionRateMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllHhCompletionRateMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllHouseholdRelationsModules(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllHouseholdRelationsModules'
    );
}

getAllHouseholdRelationsModulesTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllHouseholdRelationsModulesTeamwise/' + stateId
    );
}

getAllHouseholdRelationsModulesMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllHouseholdRelationsModulesMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllContraceptivePrevalenceRate(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllContraceptivePrevalenceRate'
    );
}

getAllContraceptivePrevalenceRateTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllContraceptivePrevalenceRateTeamwise/' +
        stateId
    );
}

getAllContraceptivePrevalenceRateMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllContraceptivePrevalenceRateMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

getAllVaccinationHealthCards(): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllVaccinationHealthCards'
    );
}

getAllVaccinationHealthCardsTeamwise(
    stateId: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl + '/getAllVaccinationHealthCardsTeamwise/' + stateId
    );
}

getAllVaccinationHealthCardsMemberwise(
    stateId: string | null,
    teamNo: string | null
): Observable<any[]> {
    return this.http.get<any>(
        this.baseUrl +
        '/getAllVaccinationHealthCardsMemberwise/' +
        stateId +
        '/' +
        teamNo
    );
}

}

