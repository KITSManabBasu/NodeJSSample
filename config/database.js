module.exports = {

	// the database url to connect
	//url :'mongodb://MRB:Password123@apollo.modulusmongo.net:27017/yvix3ogI'
	//url : 'mongodb://manab_it:Password123@ds249025.mlab.com:49025/tododb'
	
	//url : 'mongodb://ptsuser:Password123@ds243805.mlab.com:43805/ptsdev'
	url : 'mongodb://ptsuser:Password123@ds211088.mlab.com:11088/ptslab'

	//mlab login:manab_it,Password123
	//Connection String: mongodb://ptsuser:Password123@ds243805.mlab.com:43805/ptsdev
	//mongoShell: mongo ds243805.mlab.com:43805/ptsdev -u ptsuser -p Password123
	//csv import : open git shell, CD to your csv folder, connect, run the command ex. Won
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c BILL_TYPE_MASTER -u ptsuser -p Password123 --file C:\Manab\Education\nodedemo\PTSPoCAngular4\PTSDataInCsv\BILL_TYPE_MASTER.csv --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c DESIG_MASTER -u ptsuser -p Password123 --file C:\Manab\Education\nodedemo\PTSPoCAngular4\PTSDataInCsv\DESIG_MASTER.txt --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c USER_TYPE_MASTER -u ptsuser -p Password123 --file C:\Manab\Education\nodedemo\PTSPoCAngular4\PTSDataInCsv\USER_TYPE_MASTER.txt --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c ROLE_MASTER -u ptsuser -p Password123 --file C:\Manab\Education\nodedemo\PTSPoCAngular4\PTSDataInCsv\ROLE_MASTER.txt --type csv --headerline
    //mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c TEAM_MASTER -u ptsuser -p Password123 --file C:\Manab\Education\nodedemo\PTSPoCAngular4\PTSDataInCsv\TEAM_MASTER.txt --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c COMPANY_MASTER -u ptsuser -p Password123 --file C:\Manab\Education\nodedemo\PTSPoCAngular4\PTSDataInCsv\COMPANY_MASTER.txt --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c locs -u ptsuser -p Password123 --file C:\Manab\Education\nodedemo\PTSPoCAngular4\PTSDataInCsv\LOC_MASTER.txt --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c Won -u ptsuser -p Password123 --file WON_MASTER.csv --type csv --headerline

	//after formating the date to custom format yyyy-mm-dd, converted to excel to csv and run below command
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c Won2 -u ptsuser -p Password123 --file WON_MASTER_DateCorrection.csv --type csv --headerline

	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c businessareas -u ptsuser -p Password123 --file BUSINESS_AREA_MASTER.txt --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c projecttypes -u ptsuser -p Password123 --file PROJECT_TYPE_MASTER.txt --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c projectdetails -u ptsuser -p Password123 --file PROJECT_DETAILS.csv --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c users -u ptsuser -p Password123 --file User_TestData.csv --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c fpbillings -u ptsuser -p Password123 --file FP_BILLING.csv --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c freezes -u ptsuser -p Password123 --file TIME_SHEET_FREEZE.csv --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c weeks -u ptsuser -p Password123 --file Periods_Correction.csv --type csv --headerline
	//mongoimport -h ds243805.mlab.com:43805 -d ptsdev -c periods -u ptsuser -p Password123 --file Period_Only.csv --type csv --headerline

}
