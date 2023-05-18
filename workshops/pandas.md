---
title: 'Introduction to Data Wrangling, Cleaning, and Analysis with Python and Pandas'
excerpt: 'In this workshop, we are going to learn some basic commands in [Pandas](https://pandas.pydata.org/pandas-docs/stable/getting_started/overview.html), an expansive Python library for working with tabular data like CSV files. You can think of Pandas as a more powerful version of Excel that operates within the Python environment, where you can wrangle, clean, analyze, and visualize data. Knowing how to use Pandas is important if you plan on working with datasets that include qualitative and/or quantitative data points.'
cover_image: '/images/workshops/img7.jpg'

learning objectives:
    - Import Pandas and read in a CSV file as a DataFrame
    - Explore your data, including displaying and sampling the data
    - Clean your data, including checking for duplicates and converting data types
    - Review and interpret summary statistics
    - Filter your data, including renaming, selecting, dropping, and adding columns
    - Analyze your data by sorting columns, grouping columns, and counting values
    - Visualize your data with basic bar charts, pie charts, and time series
    - Write a DataFrame to a CSV file
    - Build your Pandas skills with the Pandas documentation and other resources

estimated time:
    - 4 hours

dependencies:
    workshop prerequisites:
        python:
            excerpt: (required) This workshop relies heavily on concepts from the Python workshop, and having a basic understanding of how to use the commands discussed in the workshop will be central for anyone who wants to learn about data analysis with Python and Pandas.
            required: true
        command-line:
            excerpt: (recommended) This workshop makes some reference to concepts from the Command Line workshop, and having basic knowledge about how to use the command line will be central for anyone who wants to learn about text analysis with Python and Pandas.
            recommended: true
    installations:
        pythonguide: 
            excerpt: (Required) You can use any installation of Python (but make sure it is of version 3). For our purposes, Anaconda will provide everything necessary for all the workshops that are part of the DHRI curriculum.
            required: true
        pandas:
            excerpt: (required) You will need to install the Pandas package into your Python packages for the purposes of this workshop. This guide will help you along the way.
            required: true
    insights:
        jupyter-notebooks:
            excerpt: (recommended) This workshop uses Jupyter Notebooks to process the Python commands in a clear and visual way. Anyone who wants to follow along in the workshop on data analysis with Python and Pandas should read this very short introduction to how to use Notebooks.

authors:
    current: 'Rebecca Krisel'

readings:
    - "[A Beginner’s Tutorial to Jupyter Notebooks](https://towardsdatascience.com/a-beginners-tutorial-to-jupyter-notebooks-1b2f8705888a)"
    - "[Short Introduction to Jupyter Notebooks](https://curriculum.dhinstitutes.org/insights/short-introduction-to-jupyter-notebooks/)"
    - "[Guide To Data Cleaning: Definition, Benefits, Components, And How To Clean Your Data](https://www.tableau.com/learn/articles/what-is-data-cleaning)"

projects:
    - "[The Simplest Data Science Project Using Pandas & Matplotlib](https://towardsdatascience.com/the-simplest-data-science-project-using-pandas-matplotlib-9d7042e7ce6f)"
    - "[Performing Sentiment Analysis Using Twitter Data](https://www.analyticsvidhya.com/blog/2021/07/performing-sentiment-analysis-using-twitter-data/)"
    - "[Introduction to Data Visualization in Python with Pandas](https://stackabuse.com/introduction-to-data-visualization-in-python-with-pandas/)"

ethical considerations:
    - The dataset we are using for this workshop is from the [U.S. Refugee Arrivals Data](https://github.com/BuzzFeedNews/2015-11-refugees-in-the-united-states/blob/master/data/WRAPS-arrivals-by-destination-2005-2015-clean.csv). This dataset contains data about refugee arrivals to the United States between 2005 and 2015 and was originally compiled from the Department of State’s Refugee Processing Center by Jeremy Singer-Vine for his BuzzFeed article [“Where U.S. Refugees Come From — And Go — In Charts.”](https://www.buzzfeednews.com/article/jsvine/where-us-refugees-come-from-and-go-in-charts#.vooNwy74jO) The “refugee-arrivals-by-destination” CSV file, which you can download [here](https://github.com/GCDigitalFellows/intro-pandas-dri-2022/blob/main/refugee-arrivals-by-destination.csv), contains information about the number of refugees who arrived in each U.S. city and state, the year that they arrived, and the country from which they arrived.
    - As with any dataset, responsible data analysis requires more than just technical tools like Pandas. We also need to interrogate the data. Who collected this data? How and why is this data being collected? What assumptions are baked into this data? What consequences does this data have in the world? What does this data tell us about our world? When exploring this dataset, we can consider the meaning of the status of refugee, who has a right to claim that status, and which refugees are considered eligible to legally resettle in the U.S.. We could also think about who may not be represented in this data, including asylum seekers who migrate to the U.S. and become undocumented immigrants while waiting for their asylum claims to be processed.
    

resources:
    - "[Jupyter Notebook shortcuts, tips and tricks](http://maxmelnick.com/2016/04/19/python-beginner-tips-and-tricks.html)"
---

# Preparing your workspace and folders

To begin, let’s create a “pandas_workshop” folder on our Desktop. Keeping all your files for a particular project in a designated file directory will keep your project organized and will make it easier to read in your files. You can create a folder manually by navigating to your Desktop and selecting create new folder. Or, you can use the command line: 

```bash
cd Desktop
mkdir pandas_workshop

```

Next, download the **[“refugee-arrivals-by-destination” CSV file](https://drive.google.com/drive/folders/17cAPHux4ileepqNce_5FdYoQaopK3wO5?usp=sharing)** and save it in the “pandas_workshop” folder on our Desktop. You can use the command line to do this:

```bash
cd ~/Downloads
mv refugee-arrivals-by-destination.csv ~/Desktop/pandas_workshop
cd ~/Desktop/pandas_workshop
ls
```
---
## Launch your Jupyter Notebook
To get started with Jupyter notebook, you must first launch Jupyter Notebook from the “Anaconda Navigator” application on your computer. There are two ways to do this:

Find “Anaconda Navigator” in the applications folder on your computer, and double-click on the app to open it.



Once Anaconda Navigator opens, you can launch Jupyter Notebook by clicking the “Launch” button.



OR, launch Jupyter Notebook from a Terminal or Powershell by running:


```bash
jupyter notebook
```

---
## Creating a new Jupyter notebook file

Once you’ve launched Jupyter Notebook, you can create the Jupyter notebook file to run the workshop. From the Jupyter Home Tab in your Browser, find the  “pandas_workshop” folder saved on your Desktop, and start a New Python Notebook using the New button in the upper right corner. Running and saving your Jupyter Notebook from the same directory as your file will keep your project organized and will make it easier to read in your files. 



---

## Naming your Jupyter notebook file

Even though Jupyter Notebook doesn’t force you to do so, it is very important to name your file, or you will end up later with a bunch of untitled files and you will have no idea what they are about. In the top left, click on the word Untitled and give your file a name such as “intro_pandas”.


# Getting started with Pandas

* Pandas is a Python software library
* The name is derived from the term "panel data", an econometrics term for data sets that include observations over multiple time periods for the same individuals
* You can think of it as a FREE equivalent to Stata or SPSS for data manipulation and analysis. It is also more powerful than Excel
* Knowing how to use Pandas is important if you plan on working with data organized in spreadsheets (either quantitative or qualitative)


# Import Pandas

In the first blank cell, type the following command to import the Pandas library into our Jupyter Notebook. To run the command, you can click the “Run” button in the top toolbar, or you can click shift + return. 

```python
import pandas as pd
```
This import statement not only imports the Pandas library but also gives it the alias “pd.” Using this alias will save us from having to type out the entire word “Pandas” each time we need to use it. Libraries are sets of instructions that Python can use to perform specialized functions. 


If you don’t see an error when you run the notebook—that is, if there is no output—you can move on to the next step. It is not rare in programming that when you do things right, the result will be nothing happening. This is what we like to call a silent success.

---

# Read in a CSV file as a DataFrame

Next, we will read in our dataset saved as a CSV file. We will specifically work with the refugee-arrivals-by-destination.csv dataset. You want to make sure you save the dataset in the same location as your Jupyter Notebook, in this case the pandas_workshop folder saved on your Desktop. 


```python
refugee_df = pd.read_csv('refugee-arrivals-by-destination.csv', delimiter=",", encoding='utf-8')
```

- With this command, we have created a **Pandas DataFrame** object, which is a 2-dimensional labeled data structure with columns of different types. You can think of it like a spreadsheet or SQL table, or a dictionary of Series objects. 
- It is common practice to abbreviate DataFrame with “df”, as in refugee_df.  
- When reading in the CSV file, we also specified the encoding and delimiter. The delimiter specifies the character that separates or “delimits” the columns in our dataset. For CSV files, the delimiter is usually a comma but it can also be a tab. 
- UTF is “Unicode Transformation Format”, and ‘8’ means 8-bit values are used in the encoding. It is one of the most efficient and convenient encoding formats. In Python, strings are by default in utf-8 format which means each alphabet corresponds to a unique code point. Setting the encoding format ensures our strings are uniform.

## Python Methods and Attributes

Objects in Python (and other programming languages) are basically containers that can hold data and/or functions inside them. When a function is inside an object, we usually call the function a “method.” When data is inside an object, we usually call it an “attribute.”  For example, in the command we ran above, we used the “.read_csv()” method to open the “refugee-arrivals-by-destination.csv” file and added the “delimiter="” and “encoding='utf-8'” attributes. 

The terminology isn’t that important, though. What we do need to know is that you can access these “methods” and “attributes” with a . (a dot or period). When we added sort(), append(), pop(), and lower() to our library app, we briefly saw how some methods contained inside certain objects in Python, like Lists (for sort, append, and pop), and String objects, like lower.

For more info on methods and attributes, review the [“Objects in Python” lesson](https://curriculum.dhinstitutes.org/workshops/python/lessons/?page=13) in the Intro to Python workshop. 

## Keywords:

- Jupyter Notebook: The Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text.

- Pandas: Pandas is a software library written for the Python programming language for data manipulation and analysis. 

- Library: A Python library is a reusable piece of code / sets of instructions that you use in your script.

- DataFrame: A Pandas DataFrame is a 2 dimensional data structure, like a 2 dimensional array, or a table with rows and columns. Similar to a spreadsheet.

# Data exploration
## Display data 

To display the DataFrame, we can run a cell with the variable name of the DataFrame


```python
refugee_df
```


Let’s take a look at a few elements in this DataFame: 



* Index
    * The bolded ascending numbers in the very left-hand column of the DataFrame is called the Pandas Index. You can select rows based on the Index.
    * By default, the Index is a sequence of numbers starting with zero. However, you can change the Index to something else, such as one of the columns in your dataset.
    * The default index is a Unique ID - that being said, the index does not have to be a Unique ID. You can set your index to be any column in your Dataframe
* Truncation
    * The DataFrame is truncated, signaled by the ellipses in the middle … of every column.
    * The DataFrame is truncated because by default, Pandas will display 60 rows and 20 columns. You can change these default settings see [documentation](https://pandas.pydata.org/pandas-docs/stable/user_guide/options.html)
* Rows x Columns
    * Pandas reports how many rows and columns are in this dataset at the bottom of the output. Our DataFrame has 121,245 rows × 5 columns.
* NAN
    * NaN is the Pandas value for any missing data. 

## Display a selection of the Dataframe

We can also display the first _n_ rows of the DataFrame with the `.head()` method


```python
refugee_df.head(2)
```

```python
refugee_df.head(15)
```

We can accomplish the same task using a slice instead:
```python
refugee_df[:2]
```
We can also display the last 10 rows of the DataFrame with the `.tail()` method:
```python
refugee_df.tail(10)
```

We can accomplish the same task using a slice instead:
```python
refugee_df[-10:]
```

---
## Display a random sample of the Dataframe
We can also look at a random sample of data with the `.sample()` method


```python
refugee_df.sample(15)
```
We can tell it's a random sample since the index numbers are completly disorganized. 


## Keywords:

- head(): head() is a method in the Pandas library that will display the top _n_ rows of a DataFrame.

- sample(): sample() is a method in the Pandas library that will display a random sample of _n_ rows in a DataFrame.

- NaN: NaN is the Pandas value for any missing data.

# Basic data cleaning

## Data types

We can get information about the columns in the DataFrame by using the `.info()` method.


```python
refugee_df.info()
```


This report tells us how many non-null, or non-blank, values are in each column, as well as what type of data is in each column. 

Pandas uses a different lexicon to describe data types from those we learned in our intro to Python curriculum. Below is a table that explains what each data type means:


<table>
  <tr>
   <td><strong>Pandas data types</strong>
   </td>
   <td><strong>Python data types</strong>
   </td>
   <td><strong>Usage</strong>
   </td>
  </tr>
  <tr>
   <td>object
   </td>
   <td>String or mixed
   </td>
   <td>Text or mixed numeric and non-numeric values
   </td>
  </tr>
  <tr>
   <td>float64
   </td>
   <td>float
   </td>
   <td>Floating point numbers
   </td>
  </tr>
  <tr>
   <td>int64
   </td>
   <td>integer
   </td>
   <td>Integer numbers
   </td>
  </tr>
  <tr>
   <td>datetime64
   </td>
   <td>NA
   </td>
   <td>Date and time values
   </td>
  </tr>
</table>


## Converting data types

Keeping this in mind, it looks as though the data type for the year column is a “int64” instead of being “datetime64.” We can run the command below to convert the data type:


```python
refugee_df['year'] = pd.to_datetime(refugee_df['year'], format = "%Y")
```


This command says: for the “year” column in the “refugee_df” DataFrame, use the `to_datetime` method in the Pandas library to convert the values in the “year” column in the “refugee_df” DataFrame to datetime data types. In this case, we need to specify the format "%Y" for just year since this is the format the data is given to us. 

We can then check to see if the data type was properly converted using the `.dtypes` object, which is similar to the `.info()` method, except it only provides information on data types.


```python
refugee_df.dtypes
```


As we can see, the data in the “year” column was successfully transformed into the datetime64 data type.

## Check for duplicate rows

As part of our data cleaning process, we want to check for duplicate rows. We can do this by using the `.duplicated()` method inside a filter to isolate only the rows in the DataFrame that are exact duplicates. Filtering data by certain values is similar to selecting columns. We add the parameter `keep=False`, which will display all the duplicated values in the dataset — rather than just the first duplicated value keep='first' or the last duplicated value keep='last'.


```python
refugee_df[refugee_df.duplicated(keep=False)]
```

Looks like we have a few duplicate rows in our dataset. 

To remove those duplicates, we can use the `.drop_duplicates()` method to drop duplicates from the DataFrame and select to keep the first instance of the duplicate or the last instance:


```python
refugee_df = refugee_df.drop_duplicates(keep='first')
```

We can check to see if the command got rid of the duplicate rows by running the .duplicated() method again: 


```python
refugee_df[refugee_df.duplicated(keep=False)]
```


Great news! We successfully removed our duplicate rows!

## Keywords:

- info(): The .info() method in Pandas tells us how many non-null, or non-blank, values are in each column, as well as what type of data is in each column.

- dtypes: The .dtypes object in Pandas tells us what type of data is in each column.

- duplicated(): The .duplicated() method in Pandas checks for duplicate rows.

- drop_duplicates(): The .drop_duplicates() method in Pandas drops duplicate rows.
-  

# Rename, select, drop, filter and add new columns
## See list of columns

To see a full list of the columns in our DataFrame, we can run the following command:


```python
refugee_df.columns
```

Our DataFrame has relatively few columns, so seeing the full list is not absolutely necessary in our case. This step becomes important when you are working with DataFrames with many columns. 

## Rename columns

To improve the readability of our dataset, we can rename columns. In our case, let’s rename “dest_state” as “state” and “dest_city” as “city”. We will use the `.rename()` method and the columns= parameter. Note that in this case we are setting the DataFrame equal to the returned value of the method so as to save the results into the DataFrame.

 

```python
refugee_df=refugee_df.rename(columns={'dest_state': 'state','dest_city':'city' })
```

## Select columns

Let’s say we wanted to view data from just one column in the DataFrame. To do this, we could run the following command:


```python
refugee_df[['state']]
```

Here we use double brackets around the column name to transform the column from a Series object into a DataFrame. Basically, the interior brackets are for lists, and the outside brackets are indexing operators. If you are curious to see the difference, try the following command instead: refugee_df['state']. 

To view additional columns at the same time, you can add them to the list within the square brackets, separated by a comma. However, you can’t select multiple columns as a Series (try: refugee_df['state','city'])


```python
refugee_df[['state','city']]
```


## Drop columns

To remove a column from the DataFrame, we can use the `.drop()` method and include the column name. In our case, we could drop the “city” column and save the result as a new DataFrame “refugee_drop_df” so we don’t override our original DataFrame. 


```python
refugee_drop_df = refugee_df.drop(columns="city")
refugee_drop_df
```
## Filter columns

We can filter a Pandas DataFrame to select only certain values. Filtering data by certain values is similar to selecting columns.

We type the name of the DataFrame followed by square brackets and then, instead of inserting a column name, we insert a True/False condition. For example, to select only rows that contain the value “Iraq”, we could run the following command:

```python
refugee_iraq_df = refugee_df[refugee_df['origin'] == 'Iraq']
refugee_iraq_df 
```

We stored our results in a new variable `refugee_iraq_df`

## Drop Rows
If we wanted to exclude all rows containing the value “Iraq”, we could run the following command:

```python
refugee_drop_iraq_df = refugee_df[refugee_df['origin'] != 'Iraq']
refugee_drop_iraq_df
```
## Add columns

We can also add columns to the DataFrame. For example, we can add a `percent_total` column to calculate the percentage of total refugee arrivals for each row.   


```python
refugee_df['percent_total'] = (refugee_df['arrivals'] / refugee_df['arrivals'].sum())*100
```

*_Note: `refugee_df['arrivals'].sum()` calculates the sum of all the values in the arrivals column._ 



You can read the command we just ran as: create a new column that calculates the number of arrivals in a row divided by the total number of arrivals in the dataset, times 100. The result of this calculation will equal the percentage of total refugee arrivals for each row.

## Keywords:

- rename(): Use the .rename() method in Pandas to rename columns in your DataFrame

- drop(): Use the .drop() method in Pandas to drop columns from your DataFrame

- add(): Use the .add() method in Pandas to add columns to your DataFrame

- Series: Series is a one-dimensional labeled array capable of holding data of any type (integer, string, float, Python objects, etc.)


# Sort Columns, Groupby Columns, & Calculations

## Stacking requests

In this lesson, we will be using commands that stack various requests such as methods, parameters, operators, and more to define the command. Pandas encourages this kind of stacking, but it can seem overwhelming at first to beginners. For example, as we will see below, a command could include two or more methods that stack on top of each other, and end with a slice operator to view only the top N rows of the results. In addition, a command can include specific parameters to call out a particular column or to sort the data in descending order. 

We will move slowly through each of the following commands to break them down. 

## Sort columns

To sort a DataFrame, we can use the `.sort_values()` method with the parameter by= and including the name of the column we want to sort by written in quotation marks. 

For example, we can sort the DataFrame by the arrivals column:


```python
refugee_df.sort_values(by='arrivals', ascending=False)[:15]
```


Note: In the command above, we used the `by=` parameter to specify that the data be sorted according to the `arrivals` column and we added the `ascending=False` parameter in order to request that the data be displayed with the highest number first. By default, Pandas will sort in `ascending` order, meaning from the smallest value to the largest value. We also added a Python list slice (i.e., [:15]) to view just the top 15 rows.

## Groupby Columns

We can group data and perform calculations on the groups using the `.groupby()` method. For example, to see the breakdown of the number of arrivals by country of origin, we can use the following command:


```python
refugee_df.groupby('origin')
```


This command created a Groupby object—grouped data that we can use to perform calculations such as counting the number of non-blank values in each column for each arrival by country of origin.

Next, we will use the following command to sum the number of refugee arrivals by country of origin, with the output showing the top twenty rows sorted by descending order:


```python
refugee_df.groupby('origin')['arrivals'].sum().sort_values(ascending=False)[:20]
```
 

These results show us the total number of arrivals by country of origin across the 2005-2015 period, in descending order, sliced for the top 20 results. 

Let’s unpack the command to better understand these results: 



* We have three stacked methods here: .groupby(), .count(), and .sort_values(). 
* groupby('origin')['arrivals']: For the Groupby object we defined in the previous step, groupby(‘origin’), we are isolating the “arrivals” column. Basically, we are asking to view the number of refugee arrivals by country of origin. 
* .sum(): This method adds non-blank cells for each column or row. The results we see in the output show the total number of refugee arrivals by country of origin. 
* .sort_values(ascending=False): This method specifies how we want our output to be sorted. We include the ascending=False parameter in order to request that the data be displayed with the highest percentage first.
* [:20]: This Python slide specifies that we just want to see the top 20 rows.

## Convert Series Object to Dataframe
You will notice that our output is not a Dataframe. Instead, it's a Series Object, which doesn't allow us to select data or make further calculations on the data. We can convert it to a Dataframe by first storing the command above in a new variable and stacking two extra commands" `to_frame` and `reset_index`:

```python
ref_sum_df=refugee_df.groupby('origin')['arrivals'].sum().sort_values(ascending=False)[:20]
ref_sum_df = ref_sum_df.to_frame().reset_index()
ref_sum_df
```



## Keywords:

- sort_values(): Use the `.sort_values()` method to sort the data within a column in your DataFrame

- groupby(): Use the `.groupby()` method to group data and perform calculations on the groups in your DataFrame 

- sum(): Use the `.sum()` method to add non-blank cells for each column or row.

- to_frame(): Use the `.to_frame()` method to convert a one dimensional Series Object into a two-dimensional Dataframe



# Basic data visualizations

To create plots and data visualization in Pandas, we can add the .plot() method to any DataFrame or Series object that has appropriate numeric data.

We can specify the title with the title= parameter and the kind of plot by altering the kind= parameter:



* ‘bar’ or ‘barh’ for bar plots (h is for horizontal)
* ‘hist’ for histogram
* ‘box’ for boxplot
* ‘kde’ or ‘density’ for density plots
* ‘area’ for area plots
* ‘scatter’ for scatter plots
* ‘hexbin’ for hexagonal bin plots
* ‘pie’ for pie plots

## Bar Charts
For example, we can visualize the data we got from our Groupby command looking at the total number of refugees by country of arrival as a bar chart:


```python
ref_sum_df.plot(kind='bar', x= 'origin', y='arrivals', title='Total number of refugee arrivals in the U.S. \n by country of origin')
```

Let’s unpack the command to better understand these results:

* ref_sum_df: This is the variable we created in the previous lesson summing the number of refugee arrivals by country of origin, with the output showing the top twenty rows sorted by descending order
* .plot(kind='bar', x= 'origin', y='arrivals', title='Total number of refugee arrivals in the U.S. \n by country of origin'):
    * Here we are using the .plot() method to create a visualization, and we are specifying that we want a bar chart with the “kind=’bar’” parameter. 
    * We also specify the values for the x axis (orgin) and y axis (arrivals)
    * We are also giving the chart a title with the “title='Total number of refugee arrivals in the U.S. \n by country of origin'” parameter. 
        * Note: By adding “\n” in the title text, we signify that the text that follows should be on a new line. 


## Pie Charts
We can also visualize the data as a pie chart:


```python
ref_sum_df.set_index('origin')[:10].plot(kind='pie', y='arrivals', title='Total number of refugee arrivals in the U.S. \n by country of origin')
```
- We start by setting the index of the dataframe to the `origin` column. This ensures that our legend will show the country names. 
- We slice our results to show just the top 10 countries. This makes our chart more legible. 
- Next, we use the `.plot()` method, specifying `pie` as the type of plot
- We also specify the y values - in our case `arrivals`




## Time Series

We can also create time series using the Groupby method. For example, if we wanted to visualize the total number of refugees resettled in the U.S. across the 2005-2015 period, we would first create a Groupby object based on the “year” column (refer back to lesson 7 for more on Groupby objects). 


```python
refugee_df.groupby('year')
```

Next, we can create a new variable calculating the average number of refugees being resettled over time. 


```python
total_arrivals_by_year = refugee_df.groupby('year')['arrivals'].sum()
```

Let’s break this command down:



* We have two stacked methods here: .groupby() and .sum()
* groupby('year')['arrivals']: For the Groupby object, groupby(year), we are isolating the “arrivals” column. Basically, we are asking to view the number of refugee arrivals by year. 
* .sum(): This method returns the sum of the values over the requested axis. In our case, it will calculate the total number of refugee arrivals per year.  

Finally, we can add the .plot() method to create a line chart. 


```python
total_arrivals_by_year.plot(kind='line', title="Total Number of Refugee Arrivals by Year")
```

In this command, we are adding the .plot() method to request a chart, and specifying that we want a line graph with the “kind=line” parameter. We are also giving the chart a title with the “title='Total Number of Refugee Arrivals by Year'” parameter. 



# Write to CSV

To output a new CSV file, we can use the .to_csv method with a name for the file in quotation marks. For example, since we added the percent_total column to the refugee_df DataFrame, we may want to download the updated DataFrame as a CSV file to use it with other programs.  


```python
refugee_df.to_csv("new_refugee.csv", encoding='utf-8', index=False)
```


In addition to a filename, we’re also specifying that the encoding is utf-8 and that the Index (the bolded left-most column) is not included in the CSV file.

 

# Building your Pandas skills with the Pandas documentation and other resources

Learning how to ask the right questions in a search engine like Google in order to find the solution to what you are trying to accomplish is the name of the game when you are just starting out with Python. Since Pandas is a popular and well documented Python package, you are bound to find myriads of resources that can help you get where you are going. 

A good first place to start when you are searching for answers with Pandas is to look at the Pandas documentation, which is fairly accessible to beginners, and is an incredible resource when you want to learn how to use a new command. It also offers a [User Guide](https://pandas.pydata.org/pandas-docs/stable/user_guide/index.html) for beginners with some fun exercises to deepen your learning.  

Let’s say you wanted to find out more about the .sort_values method we used in lesson 7 and understand the different parameters the method accepts:



* You could first search for .sort_values on the Pandas documentation website ([https://pandas.pydata.org](https://pandas.pydata.org)) and navigate to the “[pandas.DataFrame.sort_values](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.sort_values.html?highlight=sort_values#pandas-dataframe-sort-values)” documentation page.
* Scroll through the page for the info, and look at the second section for examples of how to use the method and its various parameters. 






* If you don’t find an answer that makes sense to you on the Pandas documentation page, then look on Google for other resources. Some of our go-to websites for help are [Stack Overflow](https://stackoverflow.com/), [Geeks for Geeks](https://www.geeksforgeeks.org/), and [Data to Fish](https://datatofish.com/). 

## Other Resources



* This workshop owes a huge debt to Melanie Walsh’s _[Introduction to Cultural Analytics & Python](https://melaniewalsh.github.io/Intro-Cultural-Analytics/welcome.html)_. This easy to use and understand textbook provides additional support for using Pandas. This is a great place to start if you want to continue building your Pandas skills. 






