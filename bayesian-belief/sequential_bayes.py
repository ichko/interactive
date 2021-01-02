import numpy as np
import matplotlib.pyplot as plt
import scipy.stats


def set_ax_range():
    LEFT_AX.set_xlim(X_RANGE)
    LEFT_AX.set_ylim(Y_RANGE)


def range_plot(ax, f, x_range, y_range):
    bins = 50
    xi, yi = np.mgrid[
        min(x_range):max(x_range):bins*1j,
        min(y_range):max(y_range):bins*1j
    ]
    zi = np.array([
        f(x, Y_DATA)
        for x, Y_DATA in zip(xi.flatten(), yi.flatten())
    ])

    ax.pcolormesh(xi, yi, zi.reshape(xi.shape))


def likelihood(X, Y, w):
    Z = X @ w
    var = np.var(Y)
    return np.prod([scipy.stats.norm(z, var).pdf(y) for z, y in zip(Z, Y)])


class SequentialBayes:
    def __init__(self, mean, var):
        self.prior_mean = mean
        self.prior_var = var

    def pdf(self, x):
        return scipy.stats.multivariate_normal(self.prior_mean, self.prior_var).pdf(x)

    def sample(self, size):
        return np.random.multivariate_normal(self.prior_mean, self.prior_var, size=size)

    def update(self, X, y):
        y_var = np.var(y) + 0.01
        inv_prior_var = np.linalg.inv(self.prior_var)
        inv_y_var = 1 / y_var ** 2
        posterior_var = np.linalg.inv(
            inv_prior_var + inv_y_var * (X.T @ X)
        )
        posterior_mean = posterior_var @ (
            inv_prior_var @ self.prior_mean + inv_y_var * X.T @ y
        )

        self.prior_mean = posterior_mean
        self.prior_var = posterior_var

        return posterior_mean, posterior_var


def on_click(event):
    if event.xdata is None:
        return

    LEFT_AX.clear()
    global BELIEF, X_DATA, Y_DATA
    mouse_x, mouse_y = event.xdata, event.ydata

    if len(X_DATA) > 0:
        X_DATA = np.vstack((X_DATA, [1, mouse_x]))
        Y_DATA = np.append(Y_DATA, [mouse_y])
    else:
        X_DATA = np.array([[1, mouse_x]])
        Y_DATA = np.array([mouse_y])

    BELIEF.prior_mean = np.array([0, 0])
    BELIEF.prior_var = np.diag([1, 1])
    BELIEF.update(X_DATA, Y_DATA)

    range_plot(MIDDLE_AX, lambda w1, w2: likelihood(
        X_DATA, Y_DATA, np.array([w1, w2])
    ), X_RANGE, Y_RANGE)
    plot_belief(RIGHT_AX)
    plot_belief_sample()
    LEFT_AX.scatter(X_DATA[:, 1], Y_DATA, c='r')

    set_ax_range()
    plt.pause(0.05)


def plot_belief_sample():
    Ws = BELIEF.sample(10)
    X = np.array([[1, X_RANGE[0]], [1, X_RANGE[1]]])
    ys = X @ Ws.T
    LEFT_AX.plot([X_RANGE[0], X_RANGE[1]], ys, 'b--', linewidth=0.4)


def plot_belief(ax):
    range_plot(ax, lambda w1, w2: BELIEF.pdf([w1, w2]), X_RANGE, Y_RANGE)


FIG, (LEFT_AX, MIDDLE_AX, RIGHT_AX) = plt.subplots(1, 3, figsize=(10, 3))
X_RANGE = (-2, 2)
Y_RANGE = (-2, 2)

X_DATA = np.array([])
Y_DATA = np.array([])

BELIEF = SequentialBayes(np.array([0, 0]), np.diag([1, 1]))

set_ax_range()
plot_belief(RIGHT_AX)
plot_belief_sample()

FIG.canvas.mpl_connect('button_press_event', on_click)
plt.show()
