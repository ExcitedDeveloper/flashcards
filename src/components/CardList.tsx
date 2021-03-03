import React, { useEffect, useState, useContext } from 'react'
import { AgGridReact } from '@ag-grid-community/react'
import { AllModules } from '@ag-grid-enterprise/all-modules'
import { GlobalContext } from 'contexts/Global'
import useFlashcards from 'hooks/useFlashcards'

const CardList = (): JSX.Element => {
  const { browserWidth, browserHeight, dashboardState } = useContext(
    GlobalContext
  )
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [gridApi, setGridApi] = useState<any>(null)
  const { flashCards, setFileName } = useFlashcards()

  useEffect(() => {
    setFileName(dashboardState?.fileName || '')
  }, [dashboardState?.fileName, setFileName])

  useEffect(() => {
    gridApi?.sizeColumnsToFit()
  }, [gridApi, browserWidth, browserHeight])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onGridReady = (params: any) => {
    setGridApi(params.api)
    params.api.sizeColumnsToFit()
  }

  const onModelUpdated = () => {
    gridApi?.sizeColumnsToFit()
  }

  const columnDefs = [
    {
      field: 'question',
      headerName: 'Question',
      resizable: true,
      sortable: true,
    },
    {
      field: 'answer',
      headerName: 'Answer',
      resizable: true,
      sortable: true,
    },
    {
      field: 'score',
      headerName: 'Score',
      resizable: true,
      sortable: true,
    },
  ]

  /*
  const flashCards = [
    {
      question: 'Why use a left join?',
      answer:
        'To find missing data.  The following select will find rows that are missing from table b.&#x0A;&#x0A;SELECT&#x0A;      a.Id&#x0A;FROM&#x0A;      TableA a&#x0A;LEFT JOIN TableB b ON a.Id = b.Id&#x0A;WHERE&#x0A;      b.Id IS NULL',
      score: '0%',
      history: 'N',
    },
    {
      question:
        'What are the two commands to remove all of the data from a table?  Are there any implications with the specific commands?',
      answer:
        'TRUNCATE TABLE is a statement that quickly deletes all records in a table by deallocating the data pages used by the table. This reduces the resource overhead of logging the deletions, as well as the number of locks acquired; however, it bypasses the transaction log, and the only record of the truncation in the transaction logs is the page deallocation. Records removed by the TRUNCATE TABLE statement cannot be restored.  You cannot specify a WHERE clause in a TRUNCATE TABLE statement-it is all or nothing.&#x0A;&#x0A;DELETE TABLE statements delete rows one at a time, logging each row in the transaction log, as well as maintaining log sequence number (LSN) information. Although this consumes more database resources and locks, these transactions can be rolled back if necessary. You can also specify a WHERE clause to narrow down the rows to be deleted.',
      score: '50%',
      history: 'NY',
    },
    {
      question: 'What is a CTE?',
      answer:
        'A common table expression (CTE) can be thought of as a temporary result set that is defined within the execution scope of a single SELECT, INSERT, UPDATE, DELETE, or CREATE VIEW statement. A CTE is similar to a derived table in that it is not stored as an object and lasts only for the duration of the query. Unlike a derived table, a CTE can be self-referencing and can be referenced multiple times in the same query.&#x0A;&#x0A;USE AdventureWorks2008R2;&#x0A;GO&#x0A;-- Define the CTE expression name and column list.&#x0A;WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)&#x0A;AS&#x0A;-- Define the CTE query.&#x0A;(&#x0A;    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear&#x0A;    FROM Sales.SalesOrderHeader&#x0A;    WHERE SalesPersonID IS NOT NULL&#x0A;)&#x0A;-- Define the outer query referencing the CTE name.&#x0A;SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear&#x0A;FROM Sales_CTE&#x0A;GROUP BY SalesYear, SalesPersonID&#x0A;ORDER BY SalesPersonID, SalesYear;&#x0A;GO',
      score: '100%',
      history: 'YY',
    },
    {
      question: 'What advantage does a CTE have over a subquery?',
      answer: 'A CTE can be called recursively.',
      score: '',
      history: '',
    },
    {
      question: 'Why use a left join?',
      answer:
        'To find missing data.  The following select will find rows that are missing from table b.&#x0A;&#x0A;SELECT&#x0A;      a.Id&#x0A;FROM&#x0A;      TableA a&#x0A;LEFT JOIN TableB b ON a.Id = b.Id&#x0A;WHERE&#x0A;      b.Id IS NULL',
      score: '0%',
      history: 'N',
    },
    {
      question:
        'What are the two commands to remove all of the data from a table?  Are there any implications with the specific commands?',
      answer:
        'TRUNCATE TABLE is a statement that quickly deletes all records in a table by deallocating the data pages used by the table. This reduces the resource overhead of logging the deletions, as well as the number of locks acquired; however, it bypasses the transaction log, and the only record of the truncation in the transaction logs is the page deallocation. Records removed by the TRUNCATE TABLE statement cannot be restored.  You cannot specify a WHERE clause in a TRUNCATE TABLE statement-it is all or nothing.&#x0A;&#x0A;DELETE TABLE statements delete rows one at a time, logging each row in the transaction log, as well as maintaining log sequence number (LSN) information. Although this consumes more database resources and locks, these transactions can be rolled back if necessary. You can also specify a WHERE clause to narrow down the rows to be deleted.',
      score: '50%',
      history: 'NY',
    },
    {
      question: 'What is a CTE?',
      answer:
        'A common table expression (CTE) can be thought of as a temporary result set that is defined within the execution scope of a single SELECT, INSERT, UPDATE, DELETE, or CREATE VIEW statement. A CTE is similar to a derived table in that it is not stored as an object and lasts only for the duration of the query. Unlike a derived table, a CTE can be self-referencing and can be referenced multiple times in the same query.&#x0A;&#x0A;USE AdventureWorks2008R2;&#x0A;GO&#x0A;-- Define the CTE expression name and column list.&#x0A;WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)&#x0A;AS&#x0A;-- Define the CTE query.&#x0A;(&#x0A;    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear&#x0A;    FROM Sales.SalesOrderHeader&#x0A;    WHERE SalesPersonID IS NOT NULL&#x0A;)&#x0A;-- Define the outer query referencing the CTE name.&#x0A;SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear&#x0A;FROM Sales_CTE&#x0A;GROUP BY SalesYear, SalesPersonID&#x0A;ORDER BY SalesPersonID, SalesYear;&#x0A;GO',
      score: '100%',
      history: 'YY',
    },
    {
      question: 'What advantage does a CTE have over a subquery?',
      answer: 'A CTE can be called recursively.',
      score: '',
      history: '',
    },
    {
      question: 'Why use a left join?',
      answer:
        'To find missing data.  The following select will find rows that are missing from table b.&#x0A;&#x0A;SELECT&#x0A;      a.Id&#x0A;FROM&#x0A;      TableA a&#x0A;LEFT JOIN TableB b ON a.Id = b.Id&#x0A;WHERE&#x0A;      b.Id IS NULL',
      score: '0%',
      history: 'N',
    },
    {
      question:
        'What are the two commands to remove all of the data from a table?  Are there any implications with the specific commands?',
      answer:
        'TRUNCATE TABLE is a statement that quickly deletes all records in a table by deallocating the data pages used by the table. This reduces the resource overhead of logging the deletions, as well as the number of locks acquired; however, it bypasses the transaction log, and the only record of the truncation in the transaction logs is the page deallocation. Records removed by the TRUNCATE TABLE statement cannot be restored.  You cannot specify a WHERE clause in a TRUNCATE TABLE statement-it is all or nothing.&#x0A;&#x0A;DELETE TABLE statements delete rows one at a time, logging each row in the transaction log, as well as maintaining log sequence number (LSN) information. Although this consumes more database resources and locks, these transactions can be rolled back if necessary. You can also specify a WHERE clause to narrow down the rows to be deleted.',
      score: '50%',
      history: 'NY',
    },
    {
      question: 'What is a CTE?',
      answer:
        'A common table expression (CTE) can be thought of as a temporary result set that is defined within the execution scope of a single SELECT, INSERT, UPDATE, DELETE, or CREATE VIEW statement. A CTE is similar to a derived table in that it is not stored as an object and lasts only for the duration of the query. Unlike a derived table, a CTE can be self-referencing and can be referenced multiple times in the same query.&#x0A;&#x0A;USE AdventureWorks2008R2;&#x0A;GO&#x0A;-- Define the CTE expression name and column list.&#x0A;WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)&#x0A;AS&#x0A;-- Define the CTE query.&#x0A;(&#x0A;    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear&#x0A;    FROM Sales.SalesOrderHeader&#x0A;    WHERE SalesPersonID IS NOT NULL&#x0A;)&#x0A;-- Define the outer query referencing the CTE name.&#x0A;SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear&#x0A;FROM Sales_CTE&#x0A;GROUP BY SalesYear, SalesPersonID&#x0A;ORDER BY SalesPersonID, SalesYear;&#x0A;GO',
      score: '100%',
      history: 'YY',
    },
    {
      question: 'What advantage does a CTE have over a subquery?',
      answer: 'A CTE can be called recursively.',
      score: '',
      history: '',
    },
    {
      question: 'Why use a left join?',
      answer:
        'To find missing data.  The following select will find rows that are missing from table b.&#x0A;&#x0A;SELECT&#x0A;      a.Id&#x0A;FROM&#x0A;      TableA a&#x0A;LEFT JOIN TableB b ON a.Id = b.Id&#x0A;WHERE&#x0A;      b.Id IS NULL',
      score: '0%',
      history: 'N',
    },
    {
      question:
        'What are the two commands to remove all of the data from a table?  Are there any implications with the specific commands?',
      answer:
        'TRUNCATE TABLE is a statement that quickly deletes all records in a table by deallocating the data pages used by the table. This reduces the resource overhead of logging the deletions, as well as the number of locks acquired; however, it bypasses the transaction log, and the only record of the truncation in the transaction logs is the page deallocation. Records removed by the TRUNCATE TABLE statement cannot be restored.  You cannot specify a WHERE clause in a TRUNCATE TABLE statement-it is all or nothing.&#x0A;&#x0A;DELETE TABLE statements delete rows one at a time, logging each row in the transaction log, as well as maintaining log sequence number (LSN) information. Although this consumes more database resources and locks, these transactions can be rolled back if necessary. You can also specify a WHERE clause to narrow down the rows to be deleted.',
      score: '50%',
      history: 'NY',
    },
    {
      question: 'What is a CTE?',
      answer:
        'A common table expression (CTE) can be thought of as a temporary result set that is defined within the execution scope of a single SELECT, INSERT, UPDATE, DELETE, or CREATE VIEW statement. A CTE is similar to a derived table in that it is not stored as an object and lasts only for the duration of the query. Unlike a derived table, a CTE can be self-referencing and can be referenced multiple times in the same query.&#x0A;&#x0A;USE AdventureWorks2008R2;&#x0A;GO&#x0A;-- Define the CTE expression name and column list.&#x0A;WITH Sales_CTE (SalesPersonID, SalesOrderID, SalesYear)&#x0A;AS&#x0A;-- Define the CTE query.&#x0A;(&#x0A;    SELECT SalesPersonID, SalesOrderID, YEAR(OrderDate) AS SalesYear&#x0A;    FROM Sales.SalesOrderHeader&#x0A;    WHERE SalesPersonID IS NOT NULL&#x0A;)&#x0A;-- Define the outer query referencing the CTE name.&#x0A;SELECT SalesPersonID, COUNT(SalesOrderID) AS TotalSales, SalesYear&#x0A;FROM Sales_CTE&#x0A;GROUP BY SalesYear, SalesPersonID&#x0A;ORDER BY SalesPersonID, SalesYear;&#x0A;GO',
      score: '100%',
      history: 'YY',
    },
    {
      question: 'What advantage does a CTE have over a subquery?',
      answer: 'A CTE can be called recursively.',
      score: '',
      history: '',
    },
  ]
  */

  return (
    <div className="h-100 w-100 ag-theme-alpine" style={{ height: '300px' }}>
      <AgGridReact
        // properties
        columnDefs={columnDefs}
        rowData={flashCards}
        modules={AllModules}
        defaultColDef={{ filter: true }}
        // events
        onGridReady={onGridReady}
        onModelUpdated={onModelUpdated}
      />
    </div>
  )
}

export default CardList
