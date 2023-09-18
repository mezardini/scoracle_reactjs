import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>

   
    <section class="bg-gradient pt-5 pb-6">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-row align-items-center justify-content-between">
                    <div class="heading-brand">Scoracle</div>
                    <a href="https://twitter.com/scoracle" class="btn btn-dark" target="_blank">Contact Us</a>
                </div>
            </div>
            <div class="row mt-6">
                <div class="col-md-8 mx-auto text-center">
                    <h1>Scoracle Football Predictor</h1>
                    <p class="lead mb-5">Scoracle is an AI powered predictor that uses machine learning algorithm 
                        and poisson formula to predict the outcome of football matches.
                    </p>
                    <form  method="post">
                        <input type="search" class="form-control" name="search" placeholder="Enter league. Example: 'England' for the Premier League"></input>
                            
                        <button class="btn btn-success svg-icon" type="submit">Predict</button>
                    </form>

                </div>
            </div>
            <div class="row mt-5">
                <div class="col-md-9 mx-auto">
                    <div class="code-window">
                        <div class="dots">
                            <div class="red"></div>
                            <div class="orange"></div>
                            <div class="green"></div>
                        </div>
                        <pre class="language-javascript line-numbers" >
                        1.64 - 1.24
                        1.56 - 1.60
                        Sandnes Ulf 1 vs 1 KFUM Oslo prob- 10.6%
                        Over 2.5 prob: - 38.86%
                        Over 1.5 prob: - 61.17%
                        Top 5 Probable Scorelines:
                        A 1 - 1 B: 10.59%
                        A 1 - 2 B: 8.47%
                        A 2 - 1 B: 8.26%
                        A 0 - 1 B: 6.79%
                        A 1 - 0 B: 6.62%
                        1.64 - 1.24
                        1.48 - 1.91
                        Jerv 1 vs 1 Start prob- 9.5%
                        Over 2.5 prob: - 43.95%
                        Over 1.5 prob: - 65.83%
                        Top 5 Probable Scorelines:
                        A 1 - 1 B: 9.53%
                        A 1 - 2 B: 9.10%
                        A 2 - 1 B: 7.05%
                        A 2 - 2 B: 6.73%
                        A 0 - 1 B: 6.44%
                        1.77 - 1.27
                        0.96 - 1.96
                        Haugesund 0 vs 1 Viking prob- 10.6%
                        Over 2.5 prob: - 33.49%
                        Over 1.5 prob: - 55.86%
                        Top 5 Probable Scorelines:
                        A 0 - 1 B: 10.57%
                        A 0 - 2 B: 10.36%
                        A 1 - 1 B: 10.15%
                        A 1 - 2 B: 9.95%
                        A 0 - 3 B: 6.77%
                        1.77 - 1.27
                        2.00 - 0.72
                        Molde 1 vs 0 Odd prob- 13.2%
                        Over 2.5 prob: - 29.03%
                        Over 1.5 prob: - 51.13%
                        Top 5 Probable Scorelines:
                        A 2 - 0 B: 13.17%
                        A 1 - 0 B: 13.17%
                        A 2 - 1 B: 9.49%
                        A 1 - 1 B: 9.49%
                        A 3 - 0 B: 8.78%
                        1.77 - 1.27
                        1.58 - 1.06
                        Sandefjord 1 vs 1 Stromsgodset prob- 12.0%
                        Over 2.5 prob: - 27.27%
                        Over 1.5 prob: - 49.16%
                        Top 5 Probable Scorelines:
                        A 1 - 1 B: 11.95%
                        A 1 - 0 B: 11.28%
                        A 2 - 1 B: 9.44%
                        A 2 - 0 B: 8.91%
                        A 0 - 1 B: 7.56%
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </section>

  

   
    <footer class="py-5 bg-light">
        <div class="container">
            <div class="row my-2">
                <div class="col-md-4 mx-auto text-muted text-center small-xl">
                    &copy; 2023 Scoracle - All Rights Reserved
                </div>
            </div>
        </div>
    </footer>

   
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.7.3/feather.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/prism.min.js"></script>
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0/plugins/line-numbers/prism-line-numbers.min.js"></script>
    <script src="js/scripts.js"></script>
      </body>
    </div>
  );
}

export default App;
