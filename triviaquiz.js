//Name Variable and Set Variable as Array
  var questionArray = new Array();

  //Enter Trivia Question #1 Details
  questionArray[0] = new Array();  //First Row
  questionArray[0][0] = "1";  //Question ID
  questionArray[0][1] = "c";  //Correct Answer
  questionArray[0][2] = "multipleChoice";  // Question Type
  questionArray[0][3] = "According to Acts 1:4, while Jesus was eating with the Apostles, what did Jesus command them to do?";  //Question
  questionArray[0][4] = "To read the Scripture"; //Answer 1
  questionArray[0][5] = "To repent of their sins";  //Answer 2
  questionArray[0][6] = "To not leave Jerusalem";  //Answer 3
  questionArray[0][7] = "To love one another";  //Answer 4

  //Enter Trivia Question #2 Details
  questionArray[1] = new Array();  //First Row
  questionArray[1][0] = "2";  //Question ID
  questionArray[1][1] = "b";  //Correct Answer
  questionArray[1][2] = "multipleChoice";  // Question Type
  questionArray[1][3] = "What happened when Peter and John entered the temple courts with the man who was walking, jumping, and praising God? (3:8-10)";  //Question
  questionArray[1][4] = "The temple guard flogged them for healing people on the Sabbath."; //Answer 1
  questionArray[1][5] = "The people recognized him as the lame man and were filled with wonder and amazement.";  //Answer 2
  questionArray[1][6] = "The Holy Spirit came with wind and fire.";  //Answer 3
  questionArray[1][7] = "Other people who were sick came to Peter and John to be healed.";  //Answer 4

  //Enter Trivia Question #3 Details
  questionArray[2] = new Array();  //First Row
  questionArray[2][0] = "3";  //Question ID
  questionArray[2][1] = "a";  //Correct Answer
  questionArray[2][2] = "multipleChoice";  // Question Type
  questionArray[2][3] = "When Peter and John were released, what happened after the people prayed? (4:31)";  //Question
  questionArray[2][4] = "The place where they met was shaken and they were all filled with the Holy Spirit."; //Answer 1
  questionArray[2][5] = "They decided on a safe place to hide from the temple guards.";  //Answer 2
  questionArray[2][6] = "Peter and John left to go to the mountains to rest.";  //Answer 3
  questionArray[2][7] = "Many became afraid and quit coming to the daily meetings.";  //Answer 4

  //Enter Trivia Question #4 Details
  questionArray[3] = new Array();
  questionArray[3][0] = "4";  //Question ID
  questionArray[3][1] = "Simon who is called Peter";  //Correct Answer
  questionArray[3][2] = "fillIn"; //Question type
  questionArray[3][3] = "Who did the angel of God tell Cornelius to bring back from Joppa? (10:5)";//Question
  questionArray[3][4] = "Simon";  //Optional Other Correct Answer
  questionArray[3][5] = "Peter";  //Optional Other Correct Answer
  questionArray[3][6] = "Simon Peter";  //Optional Other Correct Answer
  //Enter Trivia Question #5 Details
  questionArray[4] = new Array();
  questionArray[4][0] = "5";  //Question ID
  questionArray[4][1] = "The Lord Jesus";  //Correct Answer
  questionArray[4][2] = "fillIn"; //Question type
  questionArray[4][3] = "In whose name had the people of Samaria been baptized? (8:16)";//Question
  questionArray[4][4] = "Lord";  //Optional Other Correct Answer
  questionArray[4][5] = "Jesus";  //Optional Other Correct Answer
  questionArray[4][6] = "The Lord";  //Optional Other Correct Answer


  //Question Render

  //alert("The array length is " + questionArray.length);

  // create loop to produce questions


  //Write questions to page

  function renderQuestion(i)
  {
    //alert("This is the renderQuestion function.  The value of i = " + i);
    var questionName = "question" + i;

    if (questionArray[i][2] == "multipleChoice")
    {
      document.write("<p>" + (i+1) + ". " + questionArray[i][3] +"</p>");
      document.write("<input type='radio' id='" + 'a' + questionArray[i][0] + "' + name='" + questionName + "' value='" + questionArray[i][4] + "'>" + questionArray[i][4] + "<br />");
      document.write("<input type='radio' id='" + 'b' + questionArray[i][0] + "' + name='" + questionName + "' value='" + questionArray[i][5] + "'>" + questionArray[i][5] + "<br />");
      document.write("<input type='radio' id='" + 'c' + questionArray[i][0] + "' + name='" + questionName + "' value='" + questionArray[i][6] + "'>" + questionArray[i][6] + "<br />");
      document.write("<input type='radio' id='" + 'd' + questionArray[i][0] + "' + name='" + questionName + "' value='" + questionArray[i][7] + "'>" + questionArray[i][7] + "<br />");
    }

    if (questionArray[i][2] == "fillIn")
    {
      var fillInId = questionArray[i][2] + questionArray[i][0];
      document.write("<p>" + (i+1) + ". " + questionArray[i][3] +"</p>");
      document.write("<input type='text' id='fillInId'/>");
    }
  }
  // Testing for correct answers

  function testAnswers ()
  {
    //alert("debug: testAnswer function: " + a);  //retrieves data from the function call

    var userSelected = "";  //initialize variable
    correct = 0;
    incorrect = 0;

    for (i = 0; i < questionArray.length; i++)
      {
        if (questionArray[i][2] == "multipleChoice"){
          var correctAnswer = questionArray[i][1];  //Pulls the correct answer from the array to match to user's answer
            //alert("Correct answer for question " + questionArray[i][0] + " is " + correctAnswer);

          var myElement = "a" + (i+1);  //i+1 increments the array number by 1 to match the question number
            //alert("debug: myElement = " + myElement);

          if(document.getElementById(myElement).checked == true)
            {
              userSelected = "a";
            }

          var myElement = "b" + (i+1);

          if(document.getElementById(myElement).checked == true)
            {
              userSelected = "b";
            }

          var myElement = "c" + (i+1);

          if(document.getElementById(myElement).checked == true)
            {
              userSelected = "c";
            }

          var myElement = "d" + (i+1);

          if(document.getElementById(myElement).checked == true)
            {
              userSelected = "d";
            }

        if(userSelected==correctAnswer)
          {
            correct++;
          }
        else
          {
            incorrect++;

            //alert("Correct = " + correct);
            //alert("Incorrect = " + incorrect);
          }

      }

        if (questionArray[i][2] == "fillIn"){

          var userEntry = questionArray[i][2] + questionArray[i][0];
          var fillInText = document.getElementById("userEntry").value;
          var answer1 = questionArray[i][1];
          var answer2 = questionArray[i][4];
          var answer3 = questionArray[i][5];
          var answer4 = questionArray[i][6];

          if (fillInText === answer1 || answer2 || answer3 || answer4)
          {
            correct++;
          }
          else
          {
            incorrect++;
          }
        }
    alert("Correct answer for question " + questionArray[i][0] + " is " + questionArray[i][1]);
  }

    alert("Final Score \n Correct = " + correct + "\n Incorrect = " + incorrect);
  }
